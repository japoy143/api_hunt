const mongoose = require("mongoose");
const user = require("../models/userModel");

//add user
const addUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = await user.create({
      email: email,
      password: password,
    });
    return res.status(200).json({ Message: "Sign Up Successfully", newUser });
  } catch (error) {
    return res.status(404).json({ Message: "Sign Up Failed" });
  }
};

//get all user
const getAllUser = async (req, res) => {
  try {
    const users = await user.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ Message: "Data Fetch", users });
  } catch (error) {
    return res.status(404).json({ Message: "Data Fetch Error" });
  }
};

//user validation
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const isUser = await user.findOne({ email });
  if (isUser) {
    if (isUser.password === password) {
      return res.status(200).json("Success");
    } else {
      return res.status(404).json({ Message: "Incorrect Password" });
    }
  } else {
    return res.status(404).json({ Message: "User Doesnt Exist" });
  }
};

module.exports = {
  addUser,
  loginUser,
  getAllUser,
};
