const fs = require(`fs`);
const path = `./src/storage/storage.json`;

function getAllUsers() {
  const array = JSON.parse(fs.readFileSync(path));
  return array;
}

function getUserById(id) {
  const array = JSON.parse(fs.readFileSync(path));

  const filtered = array.filter(el => el.id == id);
  return filtered;
}

function createUser(name, surname, email, pwd) {
  const array = JSON.parse(fs.readFileSync(path));

  array.push({ id: array.length + 1, name, surname, email, pwd });

  fs.writeFileSync(path, JSON.stringify(array));
  return array;
}

module.exports = { getAllUsers, getUserById, createUser};
