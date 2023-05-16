const fs = require(`fs`);
const path = `./storage/storage.json`;

class Service {
  getAllUsers() {
    const array = JSON.parse(fs.readFileSync(path));
    if (!array.length) throw new Error(`array is empty`);
    return array;
  }
  getUserById(id) {
    const array = JSON.parse(fs.readFileSync(path));

    const filtered = array.filter((el) => el.id == id);
    if (!filtered.length) throw new Error(`такого id нет`);
    return filtered;
  }
  createUser(name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));

    const filtered = array.filter((el) => el.email == email);
    if (filtered.length > 0) throw new Error(`такой email есть`);

    array.push({ id: array.length + 1, name, surname, email, pwd });

    fs.writeFileSync(path, JSON.stringify(array));
    return array;
  }
  updateUserById(id, name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));

    const filtered = array.filter((el) => el.id != id);
    if (array.length == filtered.length) throw new Error(`id is not a found`);

    filtered.push({ id, name, surname, email, pwd });

    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
  }
  deleteUser(id) {
    const arr = JSON.parse(fs.readFileSync(path));

    const filtered = arr.filter((el) => el.id != id);
    if (filtered.length == arr.length) throw new Error(`id not found`);
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
  }
}

module.exports = {Service};
