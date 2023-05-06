const fs = require(`fs`);
const path = `./src/storage/storage.json`;

function getAllUsers() {
  const array = JSON.parse(fs.readFileSync(path));
  return array;
}


module.exports = { getAllUsers};
