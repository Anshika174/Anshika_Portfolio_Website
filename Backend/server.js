const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, "../Frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});

// ✅ Use contact routes
const contactRoutes = require("./routes/contact");
app.use("/contact", contactRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log("❌ DB error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Backend running successfully 🚀"));






