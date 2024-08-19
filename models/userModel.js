const mongoose = require("mongoose");

//1-Create A  new schema:

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
});

//2- Create a model:
const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
