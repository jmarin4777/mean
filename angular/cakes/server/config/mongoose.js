const mongoose = require("mongoose");

module.exports = mongoose.connect('mongodb://localhost/cakesDB', {useNewUrlParser: true});