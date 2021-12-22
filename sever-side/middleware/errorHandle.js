const errorHandle = (err,req,res,next) => {
    let status = 500
    let errorMessage = {
        message: 'Invalid server'
    }
    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        status = 400
        errorMessage.message = err.errors[0].message
    } else if (err.message === 'User not found') {
        status = 404
        errorMessage.message = err.message
    } else if (err.message === 'Invalid email or password') {
        status = 401
        errorMessage.message = err.message
    }
    res.status(status).json(errorMessage)
}

module.exports = errorHandle