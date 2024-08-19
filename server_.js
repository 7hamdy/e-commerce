// // const express = require("express");

// // const app = express();

// // app.listen("8080", () => {
// //   console.log("Welcome back node js ");
// // });

// // app.get("/", (req, res) => {
// //   res.send("Welcome");
// // });

// // app.get("/about", (req, res) => {
// //   res.send(`
// //     <h1>About</h1>
// //     <p>This is a simple node.js application.</p>
// //     <p>Built by: John Doe</p>
// //   `);
// // });

// const express = require("express");
// const app = express();

// app.listen("8080", (req, res) => {
//   console.log("Welcome back node js");
// });

// app.get("/about", (req, res) => {
//   res.send("Welcome");
// });

// app.get("/test", (req, res) => {
//   res.send("This is a test route");
// });

// app.get("/about/contact", (req, res) => {
//   res.send(`
//     <h1 style="color:red" ">Hello Gays in the cousce  of the world</h1>
//     `);
// });

const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ path: "./config.env" });
// dotenv.config({ path: "./config.env" });
const morgan = require("morgan");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URI)
  .then((con) => console.log(`Connected to MongoDB ${con.connection.host}`))
  .catch((err) => console.log(err));

app.use(morgan("dev"));

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true }));

//1-Creatte A  new schema:
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
});

//2- Create a model:
const UserModel = mongoose.model("user", UserSchema);

app.post("/api/users", async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const phone = req.body.phone;
  console.log(`name: ${name}, age: ${age}, phone: ${phone} `);

  const user = new UserModel({ name, age, phone });

  user
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

////////////////////////////////////
const DataSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
});
const DataModel = mongoose.model("Data", DataSchema);

app.post("/api/data", async (req, res) => {
  fName = req.body.fName;
  lName = req.body.lName;
  const data = new DataModel({ fName, lName });

  data
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

///////////////////////////////////////////////////
const testSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
});
const testModel = mongoose.model("Test", testSchema);
app.post("/api/v1", async (req, res) => {
  const name = req.body.name;
  const gender = req.body.gender;

  const test = new testModel({ name, gender });

  test
    .save()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV === "development") {
  console.log(`Prsocess Node Environment: ${process.env.NODE_ENV}`);
}
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome");
});
