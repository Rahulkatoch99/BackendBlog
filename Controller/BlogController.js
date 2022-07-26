require("../db/Connect");
require("../models/blogs");
require("../Validations/validate");
require("../models/Users");
require("../Validations/validate");

const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const routes = express.Router();

exports.AuthBlogs = async (req, res) => {
  console.log(req.body);
  res.send("blogs");
};
