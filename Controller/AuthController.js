require("../db/Connect");
require("../models/Users");
require("../Validations/validate");
require("../models/Users");
require("../Validations/validate");

const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const routes = express.Router();
const { validationResult } = require("express-validator");
const registerValidation = require("../Validations/validate");
const Registration = require("../models/Users");

exports.AuthRegistration = async (req, res) => {
  // const { name, email, work, phone, password, Confirmpassword } = req.body;
  // if (!name || !email || !work || !phone || !password || !Confirmpassword) {
  //   return res.status(422).json({ error: "plzz fill the form completely" });
  // }

  try {
    const { email } = req.body;
    const UserEmail = await Registration.findOne({ email: email });
    if (UserEmail) {
      res.status(400).json({ error: "Email is already present" });
    } else {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(422).json({ error: error.array() });
      }
      // console.log(req.body);

      const password = req.body.password;
      const Confirmpassword = req.body.Confirmpassword;

      if (password === Confirmpassword) {
        const passwordHash = await bcrypt.hash(req.body.password, 10);

        const register = new Registration({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          gender: req.body.gender,
          phone: req.body.phone,
          address: req.body.address,
          email: req.body.email,
          password: passwordHash,
        });

        const save = await register.save();
        if (save) {
          res.status(201).json({ message: "registerion succesfully" });
        }
      } else {
        res.send("password did'nt match");
        console.log(req);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

//Login auth

exports.AuthLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const UserLogin = await Registration.findOne({ email: email });
    // console.log(UserEmail);

    if (UserLogin) {
      const isMatch = await bcrypt.compare(password, UserLogin.password);
      if (!isMatch) {
        res.status(400).json({
          error: "Password Incorrect / please register yourself first",
        });
      } else {
        res
          .status(201)
          .json({ message: "user signin sucessfully", uid: UserLogin._id });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
};
