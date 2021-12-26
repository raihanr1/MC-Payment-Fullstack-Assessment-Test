const { sequelize } = require("../../models");
const { updateBalance, findBalanceUser } = require("./balance");
const {
  createNewTransactionHistory,
} = require("../history/transactionsHistory");
const topUpBalance = async (account_id, income) => {
  const t = await sequelize.transaction();
  try {
    let response = await findBalanceUser(account_id);
    if (!response) {
      throw {
        message: "Balance user account not found",
      };
    }
    let amount = {
      amount: response.amount + income,
    };
    let [successTopUp, updatedBalance] = await updateBalance(
      account_id,
      amount,
      t
    );
    let input = {
      account_id,
      history: `Top up saldo from ${response.amount}`,
      status: "TopUp",
      income,
    };
    let transactionHistory = await createNewTransactionHistory(input, t);
    let result = {
      amount: updatedBalance[0].amount,
      transaction: {
        history: transactionHistory.history,
        status: transactionHistory.status,
        amount: transactionHistory.amount,
        income: transactionHistory.income,
        createdAt: transactionHistory.createdAt,
      },
    };
    t.commit();
    return result;
  } catch (error) {
    t.rollback();
    throw error;
  }
};

module.exports = topUpBalance;
