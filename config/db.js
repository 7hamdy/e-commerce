const mongoose = require("mongoose");

const db_connection = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((con) => console.log(`Connected to MongoDB ${con.connection.host}`));
  // .catch((err) => console.log(err));
};

module.exports = db_connection;
