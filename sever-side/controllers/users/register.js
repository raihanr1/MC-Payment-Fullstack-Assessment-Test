const { User } = require("../../models");
const registerUser = async (input, t) => {
  let response = await User.create(input, { transaction: t });
  return response;
};

module.exports = registerUser;
