const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");
const { errorHandler } = require("../utils/error.js");

const handleSignUp = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ userName, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    next(errorHandler(400, "Something went wrong!"));
  }
};

module.exports = { handleSignUp };
