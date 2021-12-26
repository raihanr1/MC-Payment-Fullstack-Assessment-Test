const { sequelize } = require("../../models");
const registerUser = require("./register");
const { createBalance } = require("../transactions/balance");
const userLogin = require("./login");

const responseUserRegister = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { email, password, username } = req.body;
    let response = await registerUser({ email, password, username }, t);
    await createBalance(
      {
        account_id: response.id,
        amount: 0,
      },
      t
    );
    t.commit();
    res.status(201).json({
      message: `User with email ${response.email} has been created`,
    });
  } catch (error) {
    t.rollback();
    next(error);
  }
};

const responseUserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let response = await userLogin({ email, password });
    res.status(202).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  responseUserRegister,
  responseUserLogin,
};
