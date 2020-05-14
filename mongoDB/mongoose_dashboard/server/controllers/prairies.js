const {Prairie} = require('../models/prairie.js');

module.exports = {
    index: (req, res) => {
        Prairie.find()
            .then(data => {
                res.render("index", {prairies: data});
            })
            .catch(err => res.json(err));
    },

    new: (req, res) => {
        res.render('new', {errors: req.flash('new')})
    },

    show: (req, res) => {
        Prairie.findOne({_id: req.params.id})
            .then(data => {
                if(data != null){
                    res.render('show', {prairie: data});
                } else{
                    console.log("match not found, redirecting")
                    res.redirect('/')
                }
            })
            .catch(err => {
                console.log(err);
                res.redirect('/')
            })
    },

    edit: (req, res) => {
        Prairie.findOne({_id: req.params.id})
            .then(data => {
                if(data != null){
                    res.render('edit', {prairie: data, errors: req.flash('update')});
                } else{
                    console.log("match not found, redirecting")
                    res.redirect('/')
                }
            })
            .catch(err => {
                console.log(err);
                res.redirect('/')
            })
    },

    create: (req, res) => {
        const prairie = new Prairie();
        prairie.name = req.body.name;
        prairie.hobby = req.body.hobby;
        prairie.image = req.body.image;
        prairie.save()
            .then(newPrairieData => {
                console.log('Prairie dog added: ', newPrairieData);
                res.redirect('/');
            })
            .catch(err => {
                for(var key in err.errors){
                    req.flash('new', err.errors[key].message);
                }
                res.redirect('/prairies/new');
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
                        console.log("Updated prairie dog is ", prairie_updated);
                        res.redirect('/prairies/' + req.params.id + '/edit');
                    })
                    .catch(err => {
                        for(var key in err.errors){
                            req.flash('update', err.errors[key].message);
                            res.redirect('/prairies/' + req.params.id + '/edit');
                        }
                    })
            } else{
                console.log("match not found, redirecting");
                res.redirect('/')
            }
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
    },

    destroy: (req, res) => {
        Prairie.find({_id: req.params.id})
        .then(prairie => {
            if(prairie != null){
                console.log('Removing ', prairie);
                Prairie.deleteOne({_id: req.params.id})
                    .then(data => {
                        console.log(data);
                        res.redirect('/');
                    })
                    .catch(err => {
                        console.log(err);
                        res.redirect('/');
                    })
            } else{
                console.log("match not found, redirecting");
                res.redirect('/');
            }
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
    }
}