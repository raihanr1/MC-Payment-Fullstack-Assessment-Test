const jwt = require('jsonwebtoken');

const signToken = (payload) => {
    return jwt.sign(payload, process.env.PRIVATE_KEY_JWT)
}

const getPayload = (token) => {
    return jwt.verify(token, process.env.PRIVATE_KEY_JWT)
}

module.exports = {
    signToken,
    getPayload
}