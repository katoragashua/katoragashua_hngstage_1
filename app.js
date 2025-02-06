const express = require("express");
const cors = require("cors");
require("express-async-errors");
const { getNumberInfo } = require("./controllers/numberController");

const { StatusCodes } = require("http-status-codes");

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(StatusCodes.OK)
    .send(
      `<h1>Welcome to my HNG Internship Stage 1 Number Classification API </h1>`
    );
});

app.get("/api/classify-number", getNumberInfo);

module.exports = app;
