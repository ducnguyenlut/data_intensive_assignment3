const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  _id: Number,
  userId: Number,  // Reference to User _id
  productId: Number,  // Reference to Product _id
  quantity: Number
});

// const Order = mongoose.model("Order", orderSchema);

module.exports = orderSchema;