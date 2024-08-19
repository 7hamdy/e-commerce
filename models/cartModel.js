const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  product: { type: String, required: true },
  price: { type: Number, required: true },
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;
