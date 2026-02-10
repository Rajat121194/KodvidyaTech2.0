const mongoose = require("mongoose");

const careerFormSchema = new mongoose.Schema({
  role: String,
  duration: String,
  fullName: String,
  email: String,
  message: String,
  cv: {
    data: Buffer,
    contentType: String,
    fileName: String,
  },
  createdAt: { type: Date, default: Date.now },
  dismissedByAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model("CareerForm", careerFormSchema);
