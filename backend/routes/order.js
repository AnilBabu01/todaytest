const express = require("express");
const {
  createOrder,
  getuserOrders,
} = require("../controllers/orderController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.post("/createorder", isAuthenticatedUser, createOrder);
router.get("/getorder", isAuthenticatedUser, getuserOrders);
module.exports = router;
