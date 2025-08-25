const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config(); // Only needed locally; Render uses env vars

const app = express();

// Parse JSON for backend routes
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// Serve static frontend files
app.use(express.static(path.join(__dirname, "../Frontend")));

// Serve index.html on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});

// Example backend route: Contact form
const Contact = require("./models/Contact");
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Backend running successfully 🚀"));





