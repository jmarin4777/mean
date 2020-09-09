const {Idea} = require('../models/Idea.js');

module.exports = {
    index: async (req, res) => {
        try {
            const ideas = await Idea.find();
            res.json(ideas);
        } catch(err) {
            res.json(err);
        }
    },

    create: async (req, res) => {
        const idea = new Idea({
            title: req.body.title,
            description: req.body.description
        });
        try {
            const savedIdea = await idea.save();
            res.json(savedIdea);
        } catch(err) {
            res.json(err);
        }
    },

    show: async (req, res) => {
        try {
            const idea = await Idea.findById(req.params.ideaId);
            res.json(idea)
        } catch(err) {
            res.json(err);
        }
    },

    destroy: async (req,res) => {
        try{
            const removedIdea = await Idea.deleteOne({ _id:req.params.ideaId });
            res.json(removedIdea);
        } catch(err) {
            res.json(err);
        }
    },

    update: async (req,res) => {
        updatedKeys = {}
        updated = false
        if("title" in req.body){
            updatedKeys["title"] = req.body.title
            updated = true
        }
        if("description" in req.body){
            updatedKeys["description"] = req.body.description
            updated = true
        }
        if(!updated){
            res.send("The only valid fields for updating are title and description")
        }
        try{
            const updatedIdea = await Idea.updateOne(
                { _id:req.params.ideaId }, 
                { $set: updatedKeys }
            );
            res.json(updatedIdea);
        } catch(err) {
            res.json(err);
        }
    }
}