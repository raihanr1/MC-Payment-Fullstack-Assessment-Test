const {User} = require('../../models')
const {comparePassword} = require('../../helper/bcrypt')
const {signToken} = require('../../helper/jwt')
const userLogin = async ({email, password}) => {
    const response = await User.findOne({
        where: {
            email
        }
    })
    if (!response) {
        throw {
            message: 'User not found'
        }
    }
    if (!comparePassword(password,response.password)) {
        throw {
            message: 'Invalid email or password'
        }
    }

    let access_token = signToken({
        id: response.id,
        email: response.email,
    })

    return {
        access_token,
        username: response.username
    }


}

module.exports = userLogin