const mongoose = require('mongoose');

const PrairieSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    hobby: {type: String, required: true, minlength: 2},
    image: {type: String, required: true}
}, {timestamps: true});

module.exports = {
    Prairie: mongoose.model("Prairie", PrairieSchema)
}