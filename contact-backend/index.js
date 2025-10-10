const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
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
    if (cvFile) fs.unlink(cvFile.path, (err) => err && console.error(err));
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Failed to send email:", err.response || err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// 📤 Hire Us form route
app.post("/api/hire-us", async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email and message are required" });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: "🚀 New Hire Us Request",
    html: `
      <h3>Hire Us Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Hire Us request sent successfully" });
  } catch (err) {
    console.error("Failed to send Hire Us email:", err.response || err);
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
