const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    joinDate:{type:String},
    password: { type: String, required: true },
  },
  {
    collection: "user",
  }
);
const model = mongoose.model("user", User);
module.exports = model;
