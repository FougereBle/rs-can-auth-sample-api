const express = require("express");
const router = express.Router();

const authRoutes = require("./api/auth");

router.use("/auth", authRoutes);

module.exports = router;
