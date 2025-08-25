const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"], 
    trim: true, 
    minlength: [2, "Name must be at least 2 characters long"], 
    maxlength: [50, "Name cannot exceed 50 characters"]
  },
  email: { 
    type: String, 
    required: [true, "Email is required"], 
    trim: true, 
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },
  message: { 
    type: String, 
    required: [true, "Message is required"], 
    trim: true, 
    minlength: [10, "Message must be at least 10 characters long"], 
    maxlength: [500, "Message cannot exceed 500 characters"]
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("Contact", contactSchema);
