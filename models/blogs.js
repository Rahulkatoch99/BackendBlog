const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  blogs: {
    type: String,
    required: true,
  },
  // uid:{
  //   type:mongoose.Object
  // }
});

const Blogs = new mongoose.model("Blogs", BlogsSchema);

module.exports = Blogs;
