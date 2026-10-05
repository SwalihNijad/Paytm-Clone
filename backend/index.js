const express = require("express");
const mainRouter = require("./routes/index");
const { User } = require("./db")

const app = express;
app.use("/api/v1",mainRouter);





