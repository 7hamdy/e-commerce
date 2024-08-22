const { check } = require("express-validator");
const validitorMiddleware = require("../../middleware/validitorMiddleware");

exports.creatCategoryValiditor = [
  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 12, min: 5 })
    .withMessage("The Max length 12 and Min 5 "),
  check("description").notEmpty().withMessage("The description is required"),
  validitorMiddleware,
];

exports.updateCategoryValidator = [
  check("id").isMongoId().withMessage("The Id Is Not Valid"),
  validitorMiddleware,
];

exports.deleteCategoryValidator = [
  check("id").isMongoId().withMessage("The id is Not Valid"),
  validitorMiddleware,
];

exports.getCategoryValidator = [
  check("id").isMongoId().withMessage("The id is Not Valid"),
  validitorMiddleware,
];
