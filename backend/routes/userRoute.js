const express = require("express");
const route = express.Router();
const {
  addUser,
  loginUser,
  getAllUser,
  updateUser,
} = require("../controllers/userController");

//POST
route.post("/SignUp", addUser);

route.post("/Login", loginUser);

//GET
route.get("/", getAllUser);

//GET SPECIFIC
route.get("/:id");

//DELETE
route.delete("/:id");

//UPDATE
route.patch("/:id", updateUser);

module.exports = route;
