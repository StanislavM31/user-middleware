const express = require("express");
const {
  getAllUsers
} = require("../service/user.service.js");

let route = express.Router();

route.get("/", (req, res) => {
  let data = getAllUsers();
  res.send(data);
});


module.exports = route;
