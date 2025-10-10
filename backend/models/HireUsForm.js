const mongoose = require("mongoose");

const hireUsFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("HireUsForm", hireUsFormSchema);
