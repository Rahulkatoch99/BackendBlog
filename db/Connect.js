const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Blog")
  .then(() => {
    console.log("Connecting to the Database is successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
