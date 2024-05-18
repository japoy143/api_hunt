const express = require("express");
const route = express.Router();

//POST
route.post("/");

//GET
route.get("/");

//GET SPECIFIC
route.get("/:id");

//DELETE
route.delete("/:id");

//UPDATE
route.patch("/:id");
