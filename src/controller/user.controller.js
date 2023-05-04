const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateData,
} = require("../service/user.service.js");
let { isValidUserData } = require("../helper/validation.js");

let route = express.Router();

route.get("/", (req, res) => {
  let data = getAllUsers();
  res.send(data);
});




module.exports = route;
