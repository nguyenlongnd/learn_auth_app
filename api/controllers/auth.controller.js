const bcrypt = require("bcryptjs");
const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
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

const handleSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(401, "User not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser?.password);
    if (!validPassword) {
      next(errorHandler(401, "Unauthorized"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.secretKey);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expireDate = new Date(Date.now() + 120000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expireDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

const handleSignInGoogle = async (req, res, next) => {
  const validUser = await User.findOne({ email: req.body.email });
  if (validUser) {
    const token = jwt.sign({ id: validUser._id }, process.env.secretKey);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expireDate = new Date(Date.now() + 120000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expireDate })
      .status(200)
      .json(rest);
  } else {
    const generatedPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      profilePhoto: req.body.photoURL,
    });
    try {
      await newUser.save();
      const expireDate = new Date(Date.now() + 120000);
      const token = jwt.sign({ id: newUser._id }, process.env.secretKey);
      const { password: hashedPassword, ...rest } = newUser._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
          expires: expireDate,
        })
        .json(rest);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = { handleSignUp, handleSignIn, handleSignInGoogle };
