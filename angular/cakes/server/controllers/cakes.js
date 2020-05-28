const {Cake, Rating} = require("../models/cake");

module.exports = {
    index: (req, res) => {
        Cake.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, 

    show: (req, res) => {
        Cake.findOne({_id: req.params.id})
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

    create: (req, res) => {
        const cake = new Cake();
        cake.baker_name = req.body.baker_name;
        cake.image = req.body.image;
        cake.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            })
    },

    createRating: (req, res) => {
        const rating = new Rating();
        rating.rating = Number(req.body.rating);
        rating.comment = req.body.comment;
        rating.save()
            .then(data => {
                Cake.findOneAndUpdate({_id: req.body.cake_id}, {$push: {ratings: data}})
                    .then(data => {
                        res.json(data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
}