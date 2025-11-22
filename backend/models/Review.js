const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  _id: Number,
  userId: Number,  // Reference to User _id
  productId: Number,  // Reference to Product _id
  rating: Number,
  comment: String
});

module.exports = reviewSchema;