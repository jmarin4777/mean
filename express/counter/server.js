const express = require("express");
const app = express();
const session = require("express-session");
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'secretsession',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) =>{
    if(req.session.count){
        req.session.count += 1;
    } else{
        req.session.count = 1;
    }
    res.render('index', {count: req.session.count});
});
app.post("/reset", (req, res) =>{
    req.session.destroy();
    res.redirect('/');
})
app.use(express.static(__dirname + "/static"));
app.listen(3000, () => console.log("listening on port 3000"));