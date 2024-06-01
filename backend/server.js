const express = require("express");
require("dotenv").config();
require("colors");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//PORT and MONGODB connection string
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
// show all the method
app.use((req, res, next) => {
  console.log(req.path, req.method, req.params);
  next();
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`.blue));
    console.log(`DB Successfully connected`.blue);
  })
  .catch(() => console.log(`DB connection failed`.red));

//TODO:change the route name
const APIRoute = require("./routes/APIListRoute");
const UserRoute = require("./routes/userRoute");

app.use("/APIs", APIRoute);

app.use("/Users", UserRoute);
