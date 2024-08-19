/*

Database configuration

const mongoose = require('mongoose');
Mongoose The first thing we need to do is include mongoose in our project and open a connection to the database

A Uniform Resource Identifier (URI) is a string of characters that provides a compact 
and standardized way to identify and locate resources on the internet.

mongoose.connect('process.env.DB_URI');

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.db.name}`);
});

mongoose.connection.on('error', (err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
});

----------------------------------------------------------------
Define a schema for our User model 

-- Schema is maps to a MongoDB collection and defines the shape of the documents within that collection.

table == collection
row == document
column  == field

//1-Create A  new schema:
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
});

//2- Create a model: we need to convert our UserSchema into a Model we can work with
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
-------------------------------------------------------------------------------------------
Slugs are usually created from strings (like titles) by converting them to lowercase,
removing special characters, and replacing spaces with hyphens. 

// Example titles
const titles = [
  'Hello World!',
  'My Blog Post Title',
  'This is a Test Title.',
  'Slugify Example: How to Create Slugs'
];
// Generate slugs for each title
titles.forEach(title => {
  // Generate a slug from the title
  const slug = slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g });
  console.log(`Title: ${title}`);
  console.log(`Slug: ${slug}`);
  console.log('---');
});

-------------------------------------------------------------------------------------------------

Mongoose schemas support a timestamps option. If you set  , { timestamps: true }
Mongoose will add two properties of type Date to your schema:

createdAt: a date representing when this document was created
updatedAt: a date representing when this document was last updated

------------------------------------------------------------------------------------------------
Difference Betwwen req.params and req.query ?

In Express.js , req.params is used for route parameters, which are part of the URL path, like /users/:id. 
req.query is used for query parameters, which are appended to the URL after a ?, like /search?term=abc.
Both serve different purposes for capturing data from the URL.


*/
