const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_PASS: process.env.DB_PASS,
};
