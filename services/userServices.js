const UserModel = require("../models/userModel.js");

exports.createUser = (req, res) => {
  const { name, age, phone } = req.body;
  console.log(`name: ${name}, age: ${age}, phone: ${phone} `);

  const user = new UserModel({ name, age, phone });

  user
    .save()
    .then((result) => res.send(result))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" }); // Handle errors and send response
    });
};
// module.exports = createUser;
