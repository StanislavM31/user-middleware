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
route.put("/:id", isValidUserData, (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = updateData(id, name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = route;
