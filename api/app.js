const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoutes = require("./routes/user.route.js");
const authRoutes = require("./routes/auth.route.js");
dotenv.config();

// create app
const App = express();

// connect mongoDB
mongoose
  .connect(process.env.mongoUrl)
  .then(() => {
    console.log("connected mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

//convert request from json to object
App.use(express.json());
App.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//config port
const PORT = 5000;

//config router
App.get("/", (req, res) => {
  res.send("this is home page");
});
App.use("/api/user", userRoutes);
App.use("/api/auth", authRoutes);

// listen port
App.listen(PORT, () => console.log(`running app at port: ${PORT}`));

App.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
