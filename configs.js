const { default: mongoose } = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo Error", err));
