const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const adminRouter = require("./routers/admin");
require("dotenv").config({ path: "../config.env" });
const cors = require("cors");
const mongoose = require("mongoose");
const db = mongoose.connection;
const port = process.env.PORT || 8080;

try {
  mongoose.connect("mongodb://localhost:27017/royalTrip");

  db.on("error", console.error.bind(console, "connection error"));

  db.once("open", function () {
    console.log("Connected successfully");
  });
} catch (err) {
  console.log(err);
}

app.use(express.json());
app.use(cors());
app.use("/", userRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`server start on port ${port}`);
});
