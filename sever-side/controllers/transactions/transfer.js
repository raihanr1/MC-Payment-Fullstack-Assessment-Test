const {Balance, sequelize} = require('../../models')
const {findBalanceUser, updateBalance} = require('./balance')
const createNewTransactionHistory = require('../history/transactionsHistory')
const getUser = require('../users/findUser')
const successTransferAmount = async (userLogin, amount,user_id) => {
    const t = await sequelize.transaction()
    try {
        const {id:account_id, username} = userLogin
        let response = await findBalanceUser(account_id)
        if (!response) {
            throw {
                message: 'Balance user account not found'
            }
        }
        let user = await findBalanceUser(user_id)
        if (!user) {
            throw {
                message: 'Balance user account for transfer not found'
            }
        }
        let amountTransfer = {
            amount: response.amount - amount
        }
        if (amountTransfer['amount'] < 0) {
            throw {
                message: 'Your balance is not enough'
            }
        }
        let [successUpdateBalance,balance] = await updateBalance(account_id,amountTransfer, t)
        let getPayment = {
            amount: user.amount + amount
        }
        let [successTransfer, balanceUser] = await updateBalance(user_id,getPayment, t)
        let getUserTransfer = await getUser(user_id)
        let history = {
            account_id,
            history: getUserTransfer.username,
            status: 'Transfer',
            amount
        }
        let historyTransfer = await createNewTransactionHistory(history, t)
        history['account_id'] = getUserTransfer.id
        history['history'] = username
        history['status'] = 'Payment'
        await createNewTransactionHistory(history, t)
        t.commit()
        let result = {
            amount: balance[0].amount,
            transaction: {
                history: historyTransfer.history,
                status: historyTransfer.status,
                amount: historyTransfer.amount,
                createdAt: historyTransfer.createdAt
            }
        }
        return result
    } catch (error) {
        t.rollback()
        throw error
    }
}

module.exports = successTransferAmount