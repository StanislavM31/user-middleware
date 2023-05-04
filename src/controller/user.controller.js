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

route.get("/:id", (req, res) => {
  const { id } = req.params;
  let data = getUserById(id);
  res.send(data);
});
route.post("/", (req, res) => {
  const { name, surname, email, pwd } = req.body;
  res.send(createUser(name, surname, email, pwd));
});


module.exports = route;
