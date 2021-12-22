const {User} = require('../../models')
const registerUser = async (input) => {
    let response = await User.create(input)
    return response
}

module.exports = registerUser