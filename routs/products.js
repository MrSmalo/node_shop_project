//NODE library
const fs = require("fs");

const express = require('express');


//mongoose
const db = require('../data/mongooseDB');
const productModel = require('../data/models/product');

const route = express.Router();

route.get('/', (req, res) => {
  productModel.find((err, products) => {
    if (err) {
      return console.log(err)
    }
  }).then((products) => {
    res.render('products/index.ejs', {
      products: products
    });
  })
})

route.get('/:id', (req, res) => {
  id = req.params.id;
  let product;
  productModel.find((err, products) => {
    if (err) {
      return console.log(err)
    }
  }).then((products) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        product = products[i];
      }
    }
    console.log(product);
    res.render('products/view.ejs', {
      product: product
    })
  })
})

module.exports = route;