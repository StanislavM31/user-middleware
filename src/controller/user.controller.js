const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUser,
} = require("../service/user.service.js");

const isValidUserData = require("../helper/validation")
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

route.post(`/`, isValidUserData, (req, res) => {
  const { name, surname, email, pwd } = req.body;

  const data = createUser(name, surname, email, pwd);
  res.send(data);
});

route.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = updateUserById(id, name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

route.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteUser(id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = route;
