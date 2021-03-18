const express = require("express");
const router = express.Router();
const config = require("./config");

let users = require("./users");
router.use(users.config.ENDPOINT, users.route);

module.exports = {
  config,
  route: router,
};
