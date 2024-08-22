const express = require("express");
const slugify = require("slugify");
const dotenv = require("dotenv").config({ path: "./config.env" });
const apiError = require("./utils/apiError.js");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse URL-encoded data (form data)
app.use(express.urlencoded({ extended: true }));

// DB Connection
const db_connection = require("./config/db.js");
db_connection();

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV === "development") {
  console.log(`Prsocess Node Environment: ${process.env.NODE_ENV}`);
}
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const createUser = require("./routes/userRoutes.js");
// const createCart = require("./routes/cartRoutes.js");

const categoryRoute = require("./routes/categoryRoutes.js");
const errorMiddleware = require("./middleware/errorMiddleware.js");

const morgan = require("morgan");
app.use(morgan("dev"));

// Routes
// app.use("/api/v1/create", createUser);
// app.use("/api/v1/cart", createCart);
app.use("/api/v1/categories", categoryRoute);

// #create error and send it to error handling middleware
app.all("*", (req, res, next) => {
  // const error = new Error(`cant find this route : ${req.originalUrl}`);
  // next (err.message);
  next(new apiError(`cant find this route : ${req.originalUrl}`, 400));
});

//Global Error Handling middleware
app.use(errorMiddleware);

// Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`unhandled rejection Error : ${err.name} | ${err.message}`);

  server.close(() => {
    console.error("Server is closing down...");
    process.exit(1); // Exit with failure status code
  });
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
