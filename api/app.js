const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoutes = require("./routes/user.route.js");
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

//config port
const PORT = 5000;

//config router
App.get("/", (req, res) => {
  res.send("this is home page");
});
App.use("/api/user", userRoutes);

// listen port
App.listen(PORT, () => console.log(`running app at port: ${PORT}`));
