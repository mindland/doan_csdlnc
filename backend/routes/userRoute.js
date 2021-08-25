import express from "express";
const userRepository = require("../repositories/userRepository");
const { check, validationResult } = require("express-validator");

var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const router = express.Router();

router.get("/listuser", async (req, res) => {
  try {
    userRepository.getAllUsers(req, res);
  } catch (error) {
    res.status(401).send(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    userRepository.userSignin(req, res);
  } catch (error) {
    res.status(401).send({ message: "Invalid Email or Password." });
  }
});

router.post(
  "/register",
  [
    check("phonenumber", "Phone number is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).json({ errors: errors.array() });
    }
    try {
      await userRepository.registerAccount(req, res);
    } catch (error) {
      res.send({ message: error.message });
    }
  }
);

export default router;
