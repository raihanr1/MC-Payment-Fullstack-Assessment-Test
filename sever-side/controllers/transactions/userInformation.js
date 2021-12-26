const { User, Transaction, Balance } = require("../../models");

const transactionsUserInformation = async (account_id) => {
  let response = await User.findOne({
    where: {
      id: account_id,
    },
    attributes: {
      exclude: ["password", "createdAt", "updatedAt"],
    },
    include: [
      {
        model: Balance,
        as: "balance",
        attributes: {
          exclude: ["id", "account_id", "createdAt", "updatedAt"],
        },
      },
      {
        model: Transaction,
        as: "transaction",
        attributes: {
          exclude: ["account_id", "updatedAt"],
        },
      },
    ],
    order: [[{ model: Transaction, as: "transaction" }, "createdAt", "DESC"]],
  });
  return response;
};

module.exports = transactionsUserInformation;
