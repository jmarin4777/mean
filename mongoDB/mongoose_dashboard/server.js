const express = require("express");
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

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(3000, () => console.log("listening on port 3000"));