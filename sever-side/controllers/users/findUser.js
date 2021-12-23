const {User} = require('../../models')
const getUser = async (id) => {
    let response = await User.findByPk(id)
    return response
}

module.exports = getUser