const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const app = express();  // ✅ create app first

// ======= MIDDLEWARE =======
app.use(cors());                  // ✅ now app exists
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======= ROUTES =======
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// ======= MONGODB =======
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.error("❌ MongoDB Connection Failed:", err));

// ======= TEST ROUTE =======
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// ======= START SERVER =======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




