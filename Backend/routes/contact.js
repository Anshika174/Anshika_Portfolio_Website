const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /contact
router.post("/", async (req, res) => {
  try {
    console.log("📩 Incoming request at /contact", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, msg: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Error while saving:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
