const {Prairie} = require('../models/prairie');

module.exports = {
    index: (req, res) => {
        Prairie.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, 
    
    show: (req, res) => {
        Prairie.findOne({_id: req.params.id})
            .then(data => {
                if(data != null){
                    res.json(data);
                } else{
                    console.log("match not found");
                }
            })
            .catch(err => {
                console.log(err);
            })
    },

    create:(req, res) => {
        const prairie = new Prairie();
        prairie.name = req.body.name;
        prairie.hobby = req.body.hobby;
        prairie.image = req.body.image;
        prairie.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            })
    },

    update: (req, res) => {
        Prairie.findOne({_id: req.params.id})
        .then(prairie => {
            if(prairie != null){
                for(var key in req.body){
                    prairie[key] = req.body[key];
                }
                prairie.save()
                    .then(prairie_updated => {
                        res.json(prairie_updated);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else{
                console.log("match not found");
            }
        })
        .catch(err => {
            console.log(err);
        })
    },

    destroy: (req, res) => {
        Prairie.find({_id: req.params.id})
        .then(prairie => {
            if(prairie != null){
                Prairie.deleteOne({_id: req.params.id})
                    .then(data => {
                        res.json(data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else{
                console.log("match not found");
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}