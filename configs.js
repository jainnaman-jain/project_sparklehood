const { default: mongoose } = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/incidentsDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo Error", err));
