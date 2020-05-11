const express = require("express");
const app = express();
const session = require("express-session");
app.use(session({
    secret: 'secretsession',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/result", (req, res) =>{
    var result = req.session.form;
    res.render('result', {result: result});
});
app.post("/result", (req, res) =>{
    req.session.form = req.body //would typically use a database to store this info, as private data should not be stored in session.  
    res.redirect('/result');
})

app.listen(3000, () => console.log("listening on port 3000"));
