const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// Hardcoded Admin Credentials
const ADMIN_EMAIL = "19R0CKY93";
const ADMIN_PASSWORD = "R0CKYR4NGR4";

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // frontend origin
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/kodvidyaDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Models
const contactFormSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
  cv: {
    data: Buffer,
    contentType: String,
    fileName: String,
  },
  createdAt: { type: Date, default: Date.now },
});
const ContactForm = mongoose.model("ContactForm", contactFormSchema);

const hireUsFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const HireUsForm = mongoose.model("HireUsForm", hireUsFormSchema);

// Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use Gmail App Password if 2FA enabled
  },
});

// Multer for CV upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ------------------- ROUTES -------------------

// Admin Login
app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ success: true, token });
  } else {
    return res.status(400).json({ error: "Invalid credentials" });
  }
});

// Middleware to verify JWT
function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(403).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

// Contact Form (with CV upload)
app.post("/api/contact", upload.single("cv"), async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    const newContact = new ContactForm({
      firstName,
      lastName,
      email,
      message,
      cv: req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype,
            fileName: req.file.originalname,
          }
        : null,
    });

    await newContact.save();

    // Send email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Message: ${message}
      `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              content: req.file.buffer,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Message & CV saved!" });
  } catch (error) {
    console.error("Error in contact form:", error);
    res.status(500).json({ error: "Failed to process contact form" });
  }
});

// Hire Us Form
app.post("/api/hire-us", async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body;

    await HireUsForm.create({ name, email, company, phone, message });

    // Send email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Hire Us Request",
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Hire request sent & saved!" });
  } catch (error) {
    console.error("Error in hire-us form:", error);
    res.status(500).json({ error: "Failed to process hire-us form" });
  }
});

// Admin – fetch all forms
app.get("/api/admin/forms", authMiddleware, async (req, res) => {
  try {
    const contactForms = await ContactForm.find().sort({ createdAt: -1 });
    const hireUsForms = await HireUsForm.find().sort({ createdAt: -1 });
    res.json({ contactForms, hireUsForms });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch forms" });
  }
});

// Admin – fetch CV by ContactForm ID
app.get("/api/admin/contact/:id/cv", authMiddleware, async (req, res) => {
  try {
    const contact = await ContactForm.findById(req.params.id);
    if (!contact || !contact.cv) {
      return res.status(404).json({ error: "CV not found" });
    }

    res.set("Content-Type", contact.cv.contentType);
    res.set("Content-Disposition", `inline; filename="${contact.cv.fileName}"`);
    res.send(contact.cv.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch CV" });
  }
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
