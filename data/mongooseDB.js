const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:Yael1761@mongoosedb-h9ael.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(connection => console.log("connected to mongodb"))
  .catch(err => console.log(err));
