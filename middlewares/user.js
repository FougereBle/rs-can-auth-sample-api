const jwt = require("jsonwebtoken");
const UserServices = require("../services/users");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "secret");

    req.user = UserServices.getUserByUsername(decoded.username);
  } catch (err) {}

  next();
};
