const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    rating: {type:Number, required: true, min: 1, max: 5},
    comment: {type:String, required: true, minlength: 2}
}, {timestamps: true});

const CakeSchema = new mongoose.Schema({
    baker_name: {type: String, required: true, minlength: 2},
    image: {type: String, required: true},
    ratings: [RatingSchema]
}, {timestamps: true});

module.exports = {
    Cake: mongoose.model("Cake", CakeSchema),
    Rating: mongoose.model("Rating", RatingSchema)
}