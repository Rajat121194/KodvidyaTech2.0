const express = require("express");
const router = express.Router();
const multer = require("multer");
const ContactForm = require("../models/ContactForm");
const HireUsForm = require("../models/HireUsForm");
const CareerForm = require("../models/CareerForm");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// expect process.env.EMAIL_USER and EMAIL_PASS configured
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// CONTACT
router.post("/contact", upload.single("cv"), async (req, res) => {
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
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
      attachments: req.file
        ? [{ filename: req.file.originalname, content: req.file.buffer }]
        : [],
    };
    transporter
      .sendMail(mailOptions)
      .catch((err) => console.error("Mail error:", err));

    res.json({ success: true, message: "Message & CV saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to process contact form" });
  }
});

// HIRE US
router.post("/hire-us", async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body;
    const newHire = new HireUsForm({ name, email, company, phone, message });
    await newHire.save();

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Hire Us Request",
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nMessage: ${message}`,
    };
    transporter
      .sendMail(mailOptions)
      .catch((err) => console.error("Mail error:", err));

    res.json({
      success: true,
      message: "Request submitted. We'll be in touch soon",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to process hire-us form" });
  }
});

// CAREER (job application) - supports file upload
router.post("/careers", upload.single("cv"), async (req, res) => {
  try {
    const { role, duration, fullName, email, message } = req.body;
    const newApp = new CareerForm({
      role,
      duration,
      fullName,
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
    await newApp.save();

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Application: ${role}`,
      text: `Role: ${role} ${
        duration ? `(${duration})` : ""
      }\nName: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
      attachments: req.file
        ? [{ filename: req.file.originalname, content: req.file.buffer }]
        : [],
    };
    transporter
      .sendMail(mailOptions)
      .catch((err) => console.error("Mail error:", err));

    res.json({ success: true, message: "Application submitted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

module.exports = router;
