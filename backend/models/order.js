const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  foodname: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "processing",
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("order", orderSchema);
