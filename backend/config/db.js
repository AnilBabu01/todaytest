const mongoose = require("mongoose");

const url = "mongodb://0.0.0.0:27017/agamintest";

const connectdb = async () => {
  mongoose.connect(url, () => {
    console.log("succussfully connect to database");
  });
};

module.exports = connectdb;
