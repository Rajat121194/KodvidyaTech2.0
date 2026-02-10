require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Connect DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/kodvidyaDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Routes
const formRoutes = require("./routes/formRoutes");
const adminRoutes = require("./routes/adminRoutes");
const jobRoutes = require("./routes/jobRoutes");
// app.use("/", (req, res) => {
//   res.status(200).json({ name: "chota don" });
// });
app.use("/api", formRoutes); // /api/contact, /api/hire-us, /api/careers
app.use("/api/admin", adminRoutes); // /api/admin/login etc.
app.use("/api/jobs", jobRoutes); // /api/jobs

// health
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
