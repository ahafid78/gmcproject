const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`connected to gmcp`))
  .catch((err) =>
    console.error(`connection to gmcp Failed -  ${err.message}`)
  );

module.exports = mongoose;
