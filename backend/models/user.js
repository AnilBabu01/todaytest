const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  staffttype: {
    type: String,
    default: "null",
  },
  staff: {
    type: Boolean,
    default: false,
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
