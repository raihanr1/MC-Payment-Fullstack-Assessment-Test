const errorHandle = (err, req, res, next) => {
  let status = 500;
  let errorMessage = {
    message: "Invalid server",
  };
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    status = 400;
    errorMessage.message = err.errors[0].message;
  } else if (err.name === "JsonWebTokenError") {
    status = 401;
    errorMessage.message = "Invalid token";
  } else if (err.message === "User not found") {
    status = 404;
    errorMessage = err;
  } else if (err.message === "Invalid email or password") {
    status = 401;
    errorMessage = err;
  } else if (err.message === "Balance user account not found") {
    status = 404;
    errorMessage = err;
  } else if (err.message === "Your balance is not enough") {
    status = 401;
    errorMessage = err;
  } else if (err.message === "Account number not found") {
    status = 404;
    errorMessage = err;
  } else if (err.message === "Please login first") {
    status = 403;
    errorMessage = err;
  } else if (err.message === "Income balance is required") {
    status = 401;
    errorMessage = err;
  } else if (err.message === "Amount is required") {
    status = 401;
    errorMessage = err;
  } else if (err.message === "Goals is required") {
    status = 401;
    errorMessage = err;
  } else if (err.message === "Transaction goals budget not found") {
    status = 404;
    errorMessage = err;
  } else if (err.name === "Maximum update balance") {
    status = 401;
    errorMessage.message = err.message;
  }
  res.status(status).json(errorMessage);
};

module.exports = errorHandle;
