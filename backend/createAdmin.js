require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

async function create() {
  await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/kodvidyaDB"
  );
  const email = process.env.INIT_ADMIN_EMAIL || "admin@kodemechanism.local";
  const password = process.env.INIT_ADMIN_PASSWORD || "ChangeMe123!";

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log("Admin already exists:", email);
    process.exit(0);
  }

  const hashed = await bcrypt.hash(password, 10);
  await Admin.create({ email, password: hashed });
  console.log(
    "Created admin:",
    email,
    "with password from .env or default (change ASAP)."
  );
  process.exit(0);
}

create().catch((err) => {
  console.error(err);
  process.exit(1);
});
