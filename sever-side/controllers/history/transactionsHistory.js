const {sequelize, Transaction} = require('../../models')

const createNewTransactionHistory = async (input,t) => {
    let response = await Transaction.create(input, {transaction: t})
    return response
}

module.exports = createNewTransactionHistory