const cartModel = require("../models/cartModel.js");

exports.createCart = (req, res) => {
  const { name, price, product } = req.body;
  console.log(`name: ${name}, price: ${price}, product: ${product} `);

  const Cart = new cartModel({ name, price, product });

  Cart.save()
    .then((result) => res.send(result))
    .catch((error) => res.json(error));
};
