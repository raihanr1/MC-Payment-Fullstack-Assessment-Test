const transactionsUserInformation = require('./userInformation')
const topUpBalance = require('./topup')
const successTransferAmount = require('./transfer')
const responseGetTransaction = async (req, res, next) => {
    try {
        let response = await transactionsUserInformation(req.user.id)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

const responseTopUpBalance = async (req, res, next) => {
    try {
        let {income} = req.body
        if (!income) {
            throw {
                message: 'Income balance is required'
            }
        }
        let response = await topUpBalance(req.user.id, +income)
        res.status(201).json(response)
    } catch (error) {
        next(error)
    }
}

const responseTransferUser = async (req,res,next) => {
    try {
        const {user_id, amount} = req.body
        let response = await successTransferAmount(req.user, +amount, user_id)
        res.status(201).json(response)
    } catch (error) {
        next(error)
    }
}




module.exports = {
    responseGetTransaction,
    responseTopUpBalance,
    responseTransferUser
}