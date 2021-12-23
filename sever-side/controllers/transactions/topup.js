const { sequelize} = require('../../models')
const {updateBalance, findBalanceUser} = require('./balance')
const createNewTransactionHistory = require('../history/transactionsHistory')
const topUpBalance = async (account_id, income) => {
    const t = await sequelize.transaction()
    try {
        let response = await findBalanceUser(account_id)
        if (!response) {
            throw {
                message: 'Balance user account not found'
            }
        }
        let amount = {
            amount: response.amount + income
        }
        let [successTopUp, updatedBalance] = await updateBalance(account_id, amount, t)
        let input = {
            account_id,
            history: `Top up saldo from ${response.amount} to be ${updatedBalance[0].amount}`,
            status: 'TopUp',
            income
        }
        await createNewTransactionHistory(input,t)
        t.commit()
        return updatedBalance
    } catch (error) {
        t.rollback()
        throw error
    }
}

module.exports = topUpBalance