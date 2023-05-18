const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name can't be blank"]
  },
  description: {
    type: String,
    required: [true, "description can't be blank"]


  },
  price: {
    type: String,
    required: [true, "price can't be blank"]
  },
  category: {
    type: String,
    required: [true, "category can't be blank"]
  },
  pictures: {
    type: Array,

    required: true
  }
}, {minimize: false});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;