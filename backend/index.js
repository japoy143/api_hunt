const express = require("express");
require("dotenv").config();
require("colors");
const mongoose = require("mongoose");
const cors = require("cors");

//cookie parser
const cookiePaser = require("cookie-parser");

const app = express();

//PORT and MONGODB connection string
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

//fix cookie
app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookiePaser());
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
