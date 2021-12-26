const router = require("express").Router();
const authentication = require("../middleware/authentication");
const {
  responseGetTransaction,
  responseTopUpBalance,
  responseTransferUser,
  responseGoalsBudget,
  updateGoalsBudgetResponse,
} = require("../controllers/transactions/index");
const errorHandle = require("../middleware/errorHandle");

router.get("/", authentication, responseGetTransaction);

router.patch("/topup", authentication, responseTopUpBalance);
router.patch("/transfer", authentication, responseTransferUser);
router.patch("/goal", authentication, responseGoalsBudget);
router.patch(
  "/goal/:transaction_id",
  authentication,
  updateGoalsBudgetResponse
);

router.use(errorHandle);

module.exports = router;
