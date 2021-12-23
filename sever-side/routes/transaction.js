const router = require('express').Router()
const authentication = require('../middleware/authentication')
const {
    responseGetTransaction,
    responseTopUpBalance,
    responseTransferUser
} = require('../controllers/transactions/index')
const errorHandle = require('../middleware/errorHandle')

router.get('/', authentication, responseGetTransaction)

router.patch('/topup', authentication,responseTopUpBalance)
router.patch('/transfer',authentication, responseTransferUser)
router.patch('/payment',authentication)
router.patch('/',authentication)

router.use(errorHandle)

module.exports = router