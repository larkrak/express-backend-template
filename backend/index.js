const express = require("express");
const cors = require("cors");
const connection = require("./connection");
const usuarioRoute = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use("/api", usuarioRoute);
module.exports = app;
