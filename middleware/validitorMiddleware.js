const express = require("express");
const { validationResult } = require("express-validator");

const validitorMiddleware = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.send({ errors: result.array().map((err) => err.msg) });
  }
  next();
};

module.exports = validitorMiddleware;
