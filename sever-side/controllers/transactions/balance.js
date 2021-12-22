const {Balance} = require('../../models')

const createBalance = async (input) => {
    let response = await Balance.create(input)
    return response
}

module.exports = createBalance