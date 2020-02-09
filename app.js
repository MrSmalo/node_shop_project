//configurations
const PORT = 4000;

//express library
const express = require("express");
const app = express();

//Middleware- encode form data
app.use(express.urlencoded({
  extended: false
}))


//route imports
const home = require("./routs/home");
const products = require("./routs/products");
const crud = require("./routs/crud")

//route middleware
app.use("/", home);
app.use("/products", products);
app.use("/crud", crud);

//static files
app.use(express.static("public"));

app.listen(PORT, () => console.log(`listening to: ${PORT}`));