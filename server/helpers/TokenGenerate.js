const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config;
const TokenGenerate = async (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: 3600 });
};

module.exports = TokenGenerate;
