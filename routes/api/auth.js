const express = require("express");
const canjs = require("rs-can-js");

const router = express.Router();

const authController = require("../../controllers/auth");

router.get("/me", authController.me);
router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/protected", canjs.can("manage_forum"), authController.protected);

module.exports = router;
