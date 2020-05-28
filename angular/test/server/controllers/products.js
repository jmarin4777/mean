const {Product} = require('../models/product');

module.exports = {
    index: (req, res) => {
        Product.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, 

    create: (req, res) => {
        const product = new Product();
        product.name = req.body.name;
        product.quantity = req.body.quantity;
        product.price = req.body.price;
        product.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                for(var key in err.errors){
                    console.log(err.errors[key].message);
                }
            })
    },

    show: (req, res) => {
        Product.findOne({_id: req.params.id})
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

    destroy: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(product => {
            if(product != null){
                if(product.quantity == 0){
                    Product.deleteOne({_id: req.params.id})
                    .then(data => {
                        res.json(data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                } else{
                    console.log("can't delete a product with quantity > 0")
                }
            } else{
                console.log("match not found");
            }
        })
        .catch(err => {
            console.log(err);
        })
    },

    update: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(product => {
            if(product != null){
                for(var key in req.body){
                    product[key] = req.body[key];
                }
                product.save()
                    .then(data => {
                        res.json(data);
                    })
                    .catch(err => {
                        for(var key in err.errors){
                            console.log(err.errors[key].message);
                        }
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