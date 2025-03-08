const express = require("express");
const { User, Teacher, Student, Parent, Admin } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const {
      role,
      firstName,
      lastName,
      username,
      age,
      email,
      password,
      ...extraFields
    } = req.body;

    let newUser;
    const hashedPassword = await bcrypt.hash(password, 16);

    switch (role) {
      case "Teacher":
        newUser = new Teacher({
          firstName,
          lastName,
          username,
          age,
          email,
          password: hashedPassword,
          ...extraFields,
        });
        break;
      case "Student":
        newUser = new Student({
          firstName,
          lastName,
          username,
          age,
          email,
          password: hashedPassword,
          ...extraFields,
        });
        break;
      case "Parent":
        newUser = new Parent({
          firstName,
          lastName,
          username,
          age,
          email,
          password: hashedPassword,
          ...extraFields,
        });
        break;
      case "Admin":
        newUser = new Admin({
          firstName,
          lastName,
          username,
          age,
          email,
          password: hashedPassword,
          ...extraFields,
        });
        break;
      default:
        return res.status(400).json({ error: "Invalid role provided" });
    }
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {});

module.exports = router;
