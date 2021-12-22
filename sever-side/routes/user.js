const router = require('express').Router()
const {responseUserRegister, responseUserLogin} = require('../controllers/users/index')
const errorHandle = require('../middleware/errorHandle')

router.post('/register', responseUserRegister)
router.post('/login', responseUserLogin)
router.use(errorHandle)
module.exports = router