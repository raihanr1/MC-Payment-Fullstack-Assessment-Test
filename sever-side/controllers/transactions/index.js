const transactionsUserInformation = require("./userInformation");
const topUpBalance = require("./topup");
const successTransferAmount = require("./transfer");
const { goalsBudget, updateGoalsBudget } = require("./goalsBudget");
const responseGetTransaction = async (req, res, next) => {
  try {
    let response = await transactionsUserInformation(req.user.id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const responseTopUpBalance = async (req, res, next) => {
  try {
    let { income } = req.body;
    if (!income) {
      throw {
        message: "Income balance is required",
      };
    }
    let response = await topUpBalance(req.user.id, +income);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const responseTransferUser = async (req, res, next) => {
  try {
    const { user_id, amount } = req.body;
    let response = await successTransferAmount(req.user, +amount, user_id);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const responseGoalsBudget = async (req, res, next) => {
  try {
    let { goals, amount, income } = req.body;
    if (!goals) {
      throw {
        message: "Goals is required",
      };
    }
    if (!amount) {
      throw {
        message: "Amount is required",
      };
    }
    if (!income) {
      throw {
        message: "Income balance is required",
      };
    }
    const response = await goalsBudget(goals, income, +amount, req.user.id);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const updateGoalsBudgetResponse = async (req, res, next) => {
  try {
    const { income } = req.body;
    let { transaction_id } = req.params;
    let response = await updateGoalsBudget(
      transaction_id,
      +income,
      req.user.id
    );
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  responseGetTransaction,
  responseTopUpBalance,
  responseTransferUser,
  responseGoalsBudget,
  updateGoalsBudgetResponse,
};
