const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.render('index.ejs');
  res.end();
})

module.exports = route;