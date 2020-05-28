const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type:String, required: true, minlength:3},
    quantity: {type:Number, required: true, min: 0},
    price: {type:Number, required: true, min: 0}
}, {timestamps: true});

module.exports = {
    Product: mongoose.model("Product", ProductSchema)
}