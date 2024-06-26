const express = require("express");
require("dotenv").config();
require("colors");
const mongoose = require("mongoose");
const cors = require("cors");

//path for directory
const path = require("path");

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

// use the client by path
app.use(express.static(path.join(__dirname, "client", "dist")));

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

// render client for any path
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
);
