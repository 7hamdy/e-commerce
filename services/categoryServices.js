const categoryModel = require("../models/categoryModel.js");
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const apiErrorHandler = require("../utils/apiError.js");

// @description Create a new category
// @route POST /api/v1/categories/create
// access Private

exports.createCategory = asyncHandler(async (req, res) => {
  const { name, slug, description } = req.body;
  const category = await categoryModel.create({
    name,
    slug: slugify(name),
    description,
  });
  res.status(201).json({ Data: category });
  /*
 2-
  categoryModel
  .create({ name, slug: slugify(name), description })
  .then((result) => res.json({ data: result }).status(201))
  .catch((err) => res.json({ error: err }).status(400));
*/

  /*
  1-
   const category = new categoryModel({
      name,
      slug: slugify(name),
      description,
    });

    category
      .save()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  */
});

// @desc get all categories
// @routes GET /api/v1/categories/all-data?page=1&limit=10
// @access public
exports.getCategory = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1; // convert to number
  const limit = req.query.limit * 1 || 5; // convert to number
  const skip = (page - 1) * limit;
  const allCategory = await categoryModel.find().limit(limit).skip(skip);
  res.json({ result: allCategory.length, page, data: allCategory }).status(400);
});

// @desc get Category By Id
// @routes GET /api/v1/categories/:id
// @access public
exports.getCategoryByID = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const category = await categoryModel.findById(id);
  if (!category) return next(new apiErrorHandler("Category not found", 404));
  res.status(201).json({ data: category });
});

// @desc update Category
// @routes PUT /api/v1/categories/:id
// @access private
exports.updateCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const name = req.body.name; // or const {name} = req.body;
  const updateData = await categoryModel.findByIdAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    {
      new: true,
    }
  );
  if (updateData.nModified === 0) {
    return res.status(400).json({ Message: "Category Not Found" });
  }
  res.json({ Message: "Category Updated Successfully", data: updateData });
});
// @Desc Delete Category By Id
// @routes Delete api/v1/categories/:id
// @access private
exports.deleteCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleteData = await categoryModel.findByIdAndDelete({ _id: id });
  if (!deleteData) {
    return res.status(400).json({ Message: "Category Not Found" });
  }
  res.json({ Message: "Category Deleted Successfully", data: deleteData });
});
