const express = require("express");
require("dotenv").config();
require("colors");
const mongoose = require("mongoose");

const app = express();

//PORT and MONGODB connection string
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
// show all the method
app.use((req, res, next) => {
  console.log(req.path, req.method, req.params);
  next();
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Listeneng on PORT ${PORT}`.blue));
    console.log(`DB Successfully connected`.blue);
  })
  .catch(() => console.log(`DB connection failed`.red));

//TODO:change the route name
const APIRoute = require("./routes/sampleRoute");

app.use("/APIs", APIRoute);
