"use strict";
class UserStorage {
  static #users = {
    id: ["jes", "나는돼지", "꿀꿀"],
    psword: ["1234", "1234", "123456"],
    name: ["name1", "name2", "name3"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return newUsers;
  }
}
module.exports = UserStorage;
