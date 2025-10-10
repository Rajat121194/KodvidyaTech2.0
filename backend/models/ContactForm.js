const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ContactForm", contactFormSchema);
