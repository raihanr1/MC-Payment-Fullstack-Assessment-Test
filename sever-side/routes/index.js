const router = require('express').Router()
const routerUsers = require('./user')
const routerTransaction = require('./transaction')

router.use('/users', routerUsers)
router.use('/balances', routerTransaction)

module.exports = router