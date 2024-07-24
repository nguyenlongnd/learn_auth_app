const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth.controller.js");
const { handleSignUp } = authControllers;

router.post("/sign-up", handleSignUp);

module.exports = router;
