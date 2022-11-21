const Order = require("../models/order");

exports.createOrder = async (req, res, next) => {
  try {
    const { foodname } = req.body;

    const order = await Order.create({
      user: req.user.id,
      foodname: foodname,
    });

    res.status(200).json({
      status: true,
      order: order,
      msg: "orderplace successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getuserOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.status(200).json({ status: true, orders: orders, msg: "You orders" });
  } catch (error) {
    console.log(error);
  }
};
