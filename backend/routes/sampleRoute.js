const express = require("express");
const route = express.Router();

const {
  addNewAPI,
  getAPI,
  getAPIs,
  deleteAPI,
  updateAPI,
} = require("../controllers/APIListController");

//POST
route.post("/", addNewAPI);

//GET
route.get("/", getAPIs);

//GET SPECIFIC
route.get("/:id", getAPI);

//DELETE
route.delete("/:id", deleteAPI);

//UPDATE
route.patch("/:id", updateAPI);

module.exports = route;
