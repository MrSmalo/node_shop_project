const mongoose = require('mongoose');

const productScema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
});

module.exports = mongoose.model('Product', productScema);