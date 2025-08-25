const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    console.log("📩 Incoming request at /api/contact", req.body);

    if (!req.body) {
      console.log("❌ No body received");
      return res.status(400).json({ error: "Request body missing" });
    }

    console.log("✅ Request body:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, msg: "Message saved successfully!" });
  } catch (err) {
    console.error("❌ Error while saving:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
