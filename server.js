const express = require("express");
const slugify = require("slugify");
const dotenv = require("dotenv").config({ path: "./config.env" });
const app = express();

// Middleware to parse JSON
app.use(express.json());
// Middleware to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true }));

const db_connection = require("./config/db.js");
db_connection();

const createUser = require("./routes/userRoutes.js");
const createCart = require("./routes/cartRoutes.js");

const categoryRoute = require("./routes/categoryRoutes.js");

const morgan = require("morgan");
app.use(morgan("dev"));

app.use("/api/v1/create", createUser);
app.use("/api/v1/cart", createCart);
app.use("/api/v1/categories", categoryRoute);

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

// Example titles
const titles = [
  "Hello World!",
  "My Blog Post Title",
  "This is a Test Title.",
  "Slugify Example: How to Create Slugs",
];
// Generate slugs for each title
titles.forEach((title) => {
  // Generate a slug from the title
  const slug = slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g });
  console.log(`Title: ${title}`);
  console.log(`Slug: ${slug}`);
  console.log("---");
});

console.log(process.argv);
console.log(process.argv[1][0]);
console.log(process.memoryUsage());
