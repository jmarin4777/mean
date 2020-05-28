const mongoose = require("mongoose");

module.exports = mongoose.connect('mongodb://localhost/productsDB', {useNewUrlParser: true});