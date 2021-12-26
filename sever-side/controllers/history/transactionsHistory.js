const { sequelize, Transaction } = require("../../models");

const createNewTransactionHistory = async (input, t) => {
  let response = await Transaction.create(input, { transaction: t });
  return response;
};

const updateTransaction = async (id, income, t) => {
  let response = await Transaction.update(income, {
    where: {
      id,
    },
    transaction: t,
    returning: true,
  });
  return response;
};

const findTransaction = async (id) => {
  let response = await Transaction.findByPk(+id);
  return response;
};

module.exports = {
  createNewTransactionHistory,
  updateTransaction,
  findTransaction,
};
