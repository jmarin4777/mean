const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");
const app = express();
app.use(session({
    secret: 'secretsession',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
mongoose.connect('mongodb://localhost/animalDB', {useNewUrlParser: true});

const PrairieSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    image: {type: String, required: true},
    hobby: {type: String, required: true, minlength: 2}
}, {timestamps: true});
const Prairie = mongoose.model("Prairie", PrairieSchema);

app.get('/', (req, res) => {
    Prairie.find()
        .then(data => {
            res.render("index", {prairies: data});
        })
        .catch(err => res.json(err));
})
app.get('/prairies/new', (req, res) => {
    res.render('new', {errors: req.flash('new')})
})
app.get('/prairies/:id', (req, res) => {
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
})
app.get('/prairies/:id/edit', (req, res) => {
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
})

app.post('/prairies', (req, res) => {
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
})
app.post('/prairies/:id', (req, res) => {
    Prairie.findOne({_id: req.params.id})
        .then(prairie => {
            if(prairie != null){
                for(var key in req.body){
                    prairie[key] = req.body[key];
                }
                prairie.save()
                    .then(prairie_updated => {
                        console.log("Updated prairie dog is ", prairie_updated);
                    })
                    .catch(err => {
                        for(var key in err.errors){
                            req.flash('update', err.errors[key].message);
                        }
                    })
                res.redirect('/prairies/' + req.params.id + '/edit');
            } else{
                console.log("match not found, redirecting");
                res.redirect('/')
            }
        })
        .catch(err => {
            console.log(err);
            res.redirect('/');
        })
})

app.post('/prairies/:id/destroy', (req, res) => {
    Prairie.find({_id: req.params.id})
        .then(prairie => {
            if(prairie != null){
                console.log('Removing ', prairie);
                Prairie.deleteOne({_id: req.params.id})
                    .then(data => {
                        console.log(data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else{
                console.log("match not found, redirecting");
            }
        })
        .catch(err => {
            console.log(err);
        })
    res.redirect('/');
})

app.listen(3000, () => console.log("listening on port 3000"));