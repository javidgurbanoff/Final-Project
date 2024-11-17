const bcrypt = require("bcryptjs");
const HashPasswordGenerate = (password) => {
  const salt = bcrypt.hashSync(password, 10);
  return salt;
};
module.exports = HashPasswordGenerate;
