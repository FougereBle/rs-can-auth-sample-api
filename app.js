require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const canjs = require("rs-can-js");

const db = require("./database");
const apiRoutes = require("./routes/api");
const userMiddleware = require("./middlewares/user");
const errorsMiddleware = require("./middlewares/errors");
const rolesHelper = require("./helpers/roles");

db.connect();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

canjs.initialize({
  roles: rolesHelper.roles,
});

app.use(userMiddleware);
app.use(apiRoutes);
app.use(errorsMiddleware);

module.exports = app;
