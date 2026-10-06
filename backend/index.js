const express = require("express");   //importing module
const mainRouter = require("./routes/index"); //same here
const { User } = require("./db")

const app = express;

app.use("/api/v1",mainRouter);

//to write the self code