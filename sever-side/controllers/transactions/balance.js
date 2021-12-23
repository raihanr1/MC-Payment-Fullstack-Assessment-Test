const {Balance, sequelize} = require('../../models')
const createBalance = async (input) => {
    let response = await Balance.create(input)
    return response
}

const updateBalance = async (account_id, amount,t) => {
    let response = await Balance.update(amount, {
        where: {
            account_id
        },
        transaction: t,
        returning: true,
    })
    return response
}

const findBalanceUser = async (account_id) => {
    let response = await Balance.findOne({
        where: {
            account_id
        }
    })
    return response
}

module.exports = {
    createBalance,
    updateBalance,
    findBalanceUser
}