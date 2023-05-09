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


module.exports = { getAllUsers, getUserById};
