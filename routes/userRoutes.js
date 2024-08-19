const express = require("express");
const { createUser } = require("../services/userServices.js");

const router = express.Router();

router.post("/", createUser);

module.exports = router;
