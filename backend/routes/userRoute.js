const express = require("express");
const route = express.Router();
const {
  addUser,
  loginUser,
  logoutUser,
  getAllUser,
  updateUser,
  handleRefreshToken,
} = require("../controllers/userController");

const verify = require("../middleware/verifyJWT");

//POST
route.post("/SignUp", addUser);

route.post("/Login", loginUser);

//Handle Refresh post
route.post("/Refresh", handleRefreshToken);

//Logout
route.post("/Logout", verify, logoutUser);

//GET
route.get("/", verify, getAllUser);

//GET SPECIFIC
route.get("/:id");

//DELETE
route.delete("/:id");

//UPDATE
route.patch("/:id", updateUser);

module.exports = route;
