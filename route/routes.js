require("../db/Connect");
require("../models/blogs");
require("../Validations/validate");
const authController = require("../Controller/AuthController");
const BlogController = require("../Controller/BlogController");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const routes = express.Router();
const { validationResult } = require("express-validator");
const registerValidation = require("../Validations/validate");
const Registration = require("../models/Users");

routes.get("/", (req, res) => {
  res.send("welcome here");
});

//Registration

routes.post(
  "/registration",
  registerValidation,
  authController.AuthRegistration
);

//login

routes.post("/Login", authController.AuthLogin);

//Blog adding

routes.post("/Blog", BlogController.AuthBlogs);

module.exports = routes;
