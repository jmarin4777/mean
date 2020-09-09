const mongoose = require("mongoose");

module.exports = mongoose.connect('mongodb://localhost/ideasDB', { useNewUrlParser: true, useUnifiedTopology: true });