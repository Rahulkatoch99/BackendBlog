require("./db/Connect");
require("./models/Users");
require("./Validations/validate");

const { json } = require("express");
const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());
app.use(require("./route/routes"));

app.listen(port, () => {
  console.log(`Connecting to the Port number ${port}`);
});
