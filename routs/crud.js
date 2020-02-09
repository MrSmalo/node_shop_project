const express = require('express');
const fs = require('fs');

const route = express.Router();

const products = JSON.parse(fs.readFileSync("./data/products.json"));

//mongoose
const db = require('../data/mongooseDB');
const productModel = require('../data/models/product');

//Create a Updated JSON file
const writeFile = () => {
  fs.writeFileSync('data/products.json', JSON.stringify(products), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

route.get('/', (req, res) => {
  res.redirect('crud/create');
})

//-Create- GET and POST
route.get('/create', (req, res) => {
  res.render('crud/create.ejs')
  res.end()
})
route.post('/create', (req, res) => {

  const body = req.body;
  const product = new productModel(body);
  product.save(function (err, fluffy) {
    if (err) return console.error(err);
  });
  res.redirect(200, '/products')

})

//-Delete- GET
route.get('/:id/delete', (req, res) => {

  const id = req.params.id;
  console.log(id);

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1);
      break
    }
  }

  writeFile();

  res.redirect(200, '/products')
})

//-Update- UPDATE


module.exports = route;