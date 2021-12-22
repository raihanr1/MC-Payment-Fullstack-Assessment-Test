const registerUser = require('./register')
const createBalance = require('../transactions/balance')
const userLogin = require('./login')
const responseUserRegister = async (req,res,next) => {
    try {
        const {email, password, username} = req.body
        let response = await registerUser({email, password, username})
        await createBalance({
            account_id: response.id,
            amount: 0
        })
        res.status(201).json({
            message: `User with email ${response.email} has been created`
        })
    } catch (error) {
        next(error)
    }
    
}

const responseUserLogin = async (req, res, next) => {
    try {
        const {email, password} = req.body
        let response = await userLogin({email, password})
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    responseUserRegister,
    responseUserLogin
}