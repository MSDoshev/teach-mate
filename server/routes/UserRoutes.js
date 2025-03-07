const express = require("express");
const { User, Teacher, Student, Parent, Admin } = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { role, firstName, lastName, age, email, password, ...extraFields } =
      req.body;

    let newUser;
    switch (role) {
      case "Teacher":
        newUser = new Teacher({
          firstName,
          lastName,
          age,
          email,
          password,
          ...extraFields,
        });
        break;
      case "Student":
        newUser = new Student({
          firstName,
          lastName,
          age,
          email,
          password,
          ...extraFields,
        });
        break;
      case "Parent":
        newUser = new Parent({
          firstName,
          lastName,
          age,
          email,
          password,
          ...extraFields,
        });
        break;
      case "Admin":
        newUser = new Admin({
          firstName,
          lastName,
          age,
          email,
          password,
          ...extraFields,
        });
        break;
      default:
        return res.status(400).json({ error: "Invalid role provided" });
    }
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error){
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req,res)=>{
    
})