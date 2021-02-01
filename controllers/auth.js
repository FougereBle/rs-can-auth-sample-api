const jwt = require("jsonwebtoken");
const UserServices = require("../services/users");

const serialize = (model) => {
  return {
    id: model.id,
    username: model.username,
    firstname: model.firstname,
    lastname: model.lastname,
  };
};

module.exports = {
  me: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "secret");

      const user = UserServices.getUserByUsername(decoded.username);

      res.status(200).json({ user: serialize(user) });
    } catch (err) {
      res.status(401).json({ error: "Bad Token" });
    }
  },
  login: (req, res, next) => {
    const { username, password } = req.body;

    const user = UserServices.getUserByUsername(username);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (password !== user.password) {
      return res.status(401).json({ error: "Bad credentials" });
    }

    const token = jwt.sign(
      {
        username,
      },
      "secret"
    );

    res.status(200).json({ token });
  },
  register: (req, res, next) => {
    const { username, password } = req.body;

    const userExists = UserServices.getUserByUsername(username);

    if (userExists) {
      return res.status(409).json({ error: "User already exists" });
    }

    const user = UserServices.createUser(username, password, "user");

    return res.status(200).json({ user: serialize(user) });
  },
  protected: (req, res, next) => {
    res.status(200).json({ superSecret: "mario" });
  },
};
