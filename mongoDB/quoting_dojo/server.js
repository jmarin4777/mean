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

mongoose.connect('mongodb://localhost/quoteDB', {useNewUrlParser: true});
const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 2}
}, {timestamps: true});
// create an object that contains methods for mongoose to interface with MongoDB
const Quote = mongoose.model('Quote', QuoteSchema);

app.use(express.urlencoded({extended: true})); //enables us to access post form data

app.use(express.static(__dirname + "/static")); //establishes static folder (put stylesheets/images here)


app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');
app.get('/quotes', (req, res) => {
    Quote.find().sort({createdAt: -1})
        .then(data => {
            console.log(data);
            res.render("quotes", {quotes: data});
        })
        .catch(err => res.json(err));
})
app.post('/quotes', (req, res) => {
    console.log(req.body);
    const quote = new Quote();
    quote.name = req.body.name;
    quote.quote = req.body.quote;
    quote.save()
        .then(newQuoteData => {
            console.log('Quote created: ', newQuoteData)
            res.redirect('/quotes');
        })
        .catch(err => {
            console.log(err)
            res.redirect('/');
        });
})


app.get('/', (req, res) => {
    res.render('index')
});

app.listen(3000, () => console.log("listening on port 3000"));