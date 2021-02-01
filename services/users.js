const data = require("../data");

module.exports = {
  getUserByUsername(username) {
    return data.users.find((u) => u.username === username);
  },
  createUser(username, password, role) {
    const newUser = {
      id: data.users.length + 1,
      username,
      password,
      role,
    };

    return data.users.push(newUser);

    return newUser;
  },
};
