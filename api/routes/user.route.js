const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controller");
const { getUser } = userControllers;

router.get("/", getUser);

module.exports = router;
