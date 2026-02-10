const mongoose = require("mongoose");

const jobPositionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: String,
    description: String,
    active: { type: Boolean, default: true },
    durations: [String], // for internship durations
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobPosition", jobPositionSchema);
