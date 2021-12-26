const { User } = require("../models");
const { getPayload } = require("../helper/jwt");
const authentication = async (req, res, next) => {
  try {
    if (!req.headers.access_token) {
      throw {
        message: "Please login first",
      };
    }
    let { id, email } = getPayload(req.headers.access_token);
    let response = await User.findOne({
      where: { id, email },
    });
    if (!response) {
      throw {
        message: "User not found",
      };
    }
    req.user = response;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
