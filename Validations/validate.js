const { check } = require("express-validator");
const registerValidation = [
  check("firstname").isLength({ min: 4 }),
  check("lastname").isLength({ min: 6 }),
  check("phone").isNumeric({ min: 10, max: 10 }),
  check("email").isEmail(),
  check("gender").isLength({ min: 4, max: 6 }),
  check("address").isLength({ min: 25 }),
  check("password").isLength({ min: 8 }),
  check("Confirmpassword").isLength({ min: 8 }),
];

module.exports = registerValidation;
