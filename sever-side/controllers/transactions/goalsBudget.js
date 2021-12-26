const { sequelize } = require("../../models");
const {
  createNewTransactionHistory,
  updateTransaction,
  findTransaction,
} = require("../history/transactionsHistory");
const { findBalanceUser, updateBalance } = require("./balance");

const goalsBudget = async (goals, income, amount, user_id) => {
  const t = await sequelize.transaction();
  try {
    let response = await findBalanceUser(user_id);
    if (!response) {
      throw {
        message: "Balance user account not found",
      };
    }
    let savingBalance = { amount: response.amount - income };
    if (savingBalance.amount < 0) {
      throw {
        message: "Your balance is not enough",
      };
    }
    let [successTransfer, balanceUser] = await updateBalance(
      user_id,
      savingBalance,
      t
    );
    let history = {
      account_id: user_id,
      history: goals,
      status: "Goals Budget",
      amount,
      income,
    };
    let historyTransaction = await createNewTransactionHistory(history, t);
    let result = {
      amount: balanceUser[0].amount,
      transaction: {
        id: historyTransaction.id,
        history: historyTransaction.history,
        status: historyTransaction.status,
        amount: historyTransaction.amount,
        income: historyTransaction.income,
        createdAt: historyTransaction.createdAt,
      },
    };
    t.commit();
    return result;
  } catch (error) {
    t.rollback();
    throw error;
  }
};

const updateGoalsBudget = async (transaction_id, income, user_id) => {
  const t = await sequelize.transaction();
  try {
    let response = await findBalanceUser(user_id);
    if (!response) {
      throw {
        message: "Balance user account not found",
      };
    }
    let savingBalance = { amount: response.amount - income };
    if (savingBalance.amount < 0) {
      throw {
        message: "Your balance is not enough",
      };
    }
    let [successTransfer, balanceUser] = await updateBalance(
      user_id,
      savingBalance,
      t
    );
    let transaction = await findTransaction(transaction_id);
    if (!transaction) {
      throw {
        message: "Transaction goals budget not found",
      };
    }
    if (transaction.income + income > transaction.amount) {
      throw {
        name: "Maximum update balance",
        message: `Maximum payment for ${transaction.history} is ${
          transaction.amount - transaction.income
        }`,
      };
    }
    let [update, transactionHistory] = await updateTransaction(
      +transaction_id,
      {
        income: transaction.income + income,
      },
      t
    );
    let result = {
      amount: balanceUser[0].amount,
      transaction: {
        history: transactionHistory[0].history,
        status: transactionHistory[0].status,
        amount: transactionHistory[0].amount,
        income: transactionHistory[0].income,
        createdAt: transactionHistory[0].createdAt,
      },
    };
    t.commit();
    return result;
  } catch (error) {
    t.rollback();
    throw error;
  }
};

module.exports = { goalsBudget, updateGoalsBudget };
