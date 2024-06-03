const mongoose = require("mongoose");
const user = require("../models/userModel");

//encryption
const bcrypt = require("bcrypt");

//add user
const addUser = async (req, res) => {
  const { email, password, avatar, isLogin } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    const newUser = await user.create({
      email: email,
      password: hashedPassword,
      avatar: avatar,
      isLogin: isLogin,
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
  if (!isUser) {
    return res.status(200).json({ Message: "User Doesn't Exist" });
  }

  const isMatch = await bcrypt.compare(password, isUser.password);

  if (isMatch) {
    return res
      .status(200)
      .json({ Message: "Success", id: user._id, email: email });
  } else {
    return res.status(200).json({ Message: "Incorrect Password" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ Message: "Invalid ID" });
  }

  const User = await user.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!User) {
    return res.status(404).json({ Message: "Data Not Updated" });
  }
  return res.status(200).json({ Message: "Login Successfully" });
};

module.exports = {
  addUser,
  loginUser,
  getAllUser,
  updateUser,
};
