const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    description: {
        type: String
    },
}, {timestamps: true});

module.exports = {
    Idea: mongoose.model("Idea", IdeaSchema)
}