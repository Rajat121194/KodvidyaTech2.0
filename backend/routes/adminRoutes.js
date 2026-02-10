const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");
const ContactForm = require("../models/ContactForm");
const HireUsForm = require("../models/HireUsForm");
const CareerForm = require("../models/CareerForm");
const auth = require("./_authMiddleware");

// Register route (optional) - but you'll normally seed the first admin using createAdmin.js
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await Admin.findOne({ email });
    if (existing)
      return res.status(400).json({ error: "Admin already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const admin = new Admin({ email, password: hashed });
    await admin.save();
    res.json({ success: true, message: "Admin created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to register admin" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.json({ success: true, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

// Update admin credentials (protected)
router.put("/update", auth, async (req, res) => {
  try {
    const { newEmail, newPassword } = req.body;
    const admin = await Admin.findById(req.adminId);
    if (!admin) return res.status(404).json({ error: "Admin not found" });

    if (newEmail) admin.email = newEmail;
    if (newPassword) admin.password = await bcrypt.hash(newPassword, 10);

    await admin.save();
    res.json({ success: true, message: "Admin credentials updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update admin" });
  }
});

// Fetch forms (protected)
router.get("/forms", auth, async (req, res) => {
  try {
    const contactForms = await ContactForm.find().sort({ createdAt: -1 });
    const hireUsForms = await HireUsForm.find().sort({ createdAt: -1 });
    const careerForms = await CareerForm.find().sort({ createdAt: -1 });
    res.json({ contactForms, hireUsForms, careerForms });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch forms" });
  }
});

// Dismiss notification
router.put("/forms/:type/:id/dismiss", auth, async (req, res) => {
  try {
    const { type, id } = req.params;
    if (type === "contact") {
      await ContactForm.findByIdAndUpdate(id, { dismissedByAdmin: true });
    } else if (type === "hire") {
      await HireUsForm.findByIdAndUpdate(id, { dismissedByAdmin: true });
    } else if (type === "career") {
      await CareerForm.findByIdAndUpdate(id, { dismissedByAdmin: true });
    } else {
      return res.status(400).json({ error: "Invalid type" });
    }
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to dismiss notification" });
  }
});

// Fetch CV by ContactForm or CareerForm ID
router.get("/contact/:id/cv", auth, async (req, res) => {
  try {
    const contact =
      (await ContactForm.findById(req.params.id)) ||
      (await CareerForm.findById(req.params.id));
    if (!contact || !contact.cv)
      return res.status(404).json({ error: "CV not found" });

    res.set("Content-Type", contact.cv.contentType);
    res.set("Content-Disposition", `inline; filename="${contact.cv.fileName}"`);
    res.send(contact.cv.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch CV" });
  }
});

module.exports = router;
