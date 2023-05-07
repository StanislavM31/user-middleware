const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser
} = require("../service/user.service.js");

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

route.post(`/`, (req, res) => {
  const { name, surname, email, pwd } = req.body;

  const data = createUser(name, surname, email, pwd);
  res.send(data);
});



module.exports = route;
