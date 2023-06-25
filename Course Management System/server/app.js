const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const courseRoute = require("./routes/courseRoute");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", courseRoute);

module.exports = app;
