const express = require("express");
const mongoose = require("mongoose");
const defaultRouter = require("./defaultRoute");
const productRouter = require("./productRoute");
const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Databse Connected."))
  .catch((err) => console.log(err));

//APIs
app.use("/",defaultRouter);
app.use("/product",productRouter);

//For handling Error
// app.use(errorHa)

//Server Running
app.listen(PORT, () => console.log("server is running at port : " + PORT));
