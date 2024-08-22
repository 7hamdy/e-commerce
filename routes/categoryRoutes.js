const express = require("express");
const {
  createCategory,
  getCategory,
  getCategoryByID,
  updateCategory,
  deleteCategory,
} = require("../services/categoryServices.js");

const {
  creatCategoryValiditor,
  getCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require("../utils/validators/categoryValidator");

const router = express.Router();
// router.route("/").get(getCategory).post(createCategory);

router.post("/create", creatCategoryValiditor, createCategory);
router.get("/all-data", getCategory);

router
  .route("/:id")
  .get(getCategoryValidator, getCategoryByID)
  .put(updateCategoryValidator, updateCategory)
  .delete(deleteCategoryValidator, deleteCategory);

module.exports = router;
