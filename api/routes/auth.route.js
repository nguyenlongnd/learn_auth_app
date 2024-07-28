const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth.controller.js");
const { handleSignUp, handleSignIn, handleSignInGoogle } = authControllers;

router.post("/sign-up", handleSignUp);
router.post("/sign-in", handleSignIn);
router.post("/sign-in-google", handleSignInGoogle);

module.exports = router;
