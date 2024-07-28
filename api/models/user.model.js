const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
