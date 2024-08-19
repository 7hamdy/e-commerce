const express = require("express");
const { createCart } = require("../services/cartServices.js");

const router = express.Router();

router.post("/", createCart);

module.exports = router;
