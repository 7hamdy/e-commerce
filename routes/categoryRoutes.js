const express = require("express");
const {
  createCategory,
  getCategory,
  getCategoryByID,
  updateCategory,
  deleteCategory,
} = require("../services/categoryServices.js");

const router = express.Router();
// router.route("/").get(getCategory).post(createCategory);

router.post("/create", createCategory);
router.get("/all-data", getCategory);
router.get("/:id", getCategoryByID);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
module.exports = router;
