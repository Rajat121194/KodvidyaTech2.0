const express = require("express");
const router = express.Router();
const JobPosition = require("../models/JobPosition");
const auth = require("./_authMiddleware"); // we'll create below

// Get all positions (public)
router.get("/", async (req, res) => {
  try {
    const jobs = await JobPosition.find({}).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

// Protected routes for admin: create, update, delete
router.post("/", auth, async (req, res) => {
  try {
    const { title, type, description, durations } = req.body;
    const job = new JobPosition({ title, type, description, durations });
    await job.save();
    res.json({ success: true, job });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create job" });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const updated = await JobPosition.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, job: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update job" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await JobPosition.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete job" });
  }
});

module.exports = router;
