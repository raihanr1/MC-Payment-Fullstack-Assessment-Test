const bcrypt = require('bcrypt');

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

const getSalt = (password) => {
  return bcrypt.hashSync(password, 10);
};

module.exports = { getSalt, comparePassword };