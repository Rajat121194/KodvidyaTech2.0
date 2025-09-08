const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const cron = require("node-cron");
require("dotenv").config();

const app = express();
const PORT = 5000;

// ✅ CORS setup
const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());

// 📁 Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// 📦 Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// ✅ Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 🔁 Load employees
const employees = require("./employees.json");

// 🎂 Birthday email logic
function checkAndSendBirthdayEmails() {
  const today = dayjs().format("MM-DD");

  const birthdayPeople = employees.filter(
    (emp) => dayjs(emp.birthday).format("MM-DD") === today
  );

  const others = employees.filter(
    (emp) => !birthdayPeople.some((bday) => bday.email === emp.email)
  );

  birthdayPeople.forEach((person) => {
    // Wish the birthday person
    transporter.sendMail(
      {
        from: process.env.EMAIL_USER,
        to: person.email,
        subject: `🎉 Happy Birthday, ${person.name}!`,
        text: `Hi ${person.name},\n\nWishing you a fantastic birthday!\n\n– Your Team`,
      },
      (err, info) => {
        if (err) console.error(`❌ Error sending to ${person.email}:`, err);
        else console.log(`✅ Birthday wish sent to ${person.name}`);
      }
    );

    // Send reminder to other staff
    others.forEach((other) => {
      transporter.sendMail(
        {
          from: process.env.EMAIL_USER,
          to: other.email,
          subject: `🎂 Reminder: It's ${person.name}'s Birthday!`,
          text: `Hi ${other.name},\n\nJust a reminder that today is ${person.name}'s birthday. Don't forget to wish them!`,
        },
        (err, info) => {
          if (err) console.error(`❌ Error sending to ${other.email}:`, err);
          else console.log(`📩 Reminder sent to ${other.name}`);
        }
      );
    });
  });

  if (birthdayPeople.length === 0) {
    console.log("📅 No birthdays today.");
  }
}

// ⏰ Run daily at 9 AM
cron.schedule("0 9 * * *", () => {
  console.log("🕘 Running birthday check...");
  checkAndSendBirthdayEmails();
});

// 📤 Contact form route
app.post("/api/contact", upload.single("cv"), async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  const cvFile = req.file;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
    `,
    attachments: cvFile
      ? [{ filename: cvFile.originalname, path: cvFile.path }]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    if (cvFile)
      fs.unlink(cvFile.path, (err) => {
        if (err) console.error("Error deleting file:", err);
      });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Failed to send email:", err.response || err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("API is running");
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
