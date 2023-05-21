const express = require("express");
require("dotenv").config();

const app = express();
const dbconfig = require("./config/dbConfig.js");
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening on port " + port));
