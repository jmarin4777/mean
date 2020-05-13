const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.use(express.urlencoded({extended: true})); //enables us to access post form data

app.use(express.static(__dirname + "/static")); //establishes static folder (put stylesheets/images here)


app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');
app.get('/users/new', (req, res) => {
    res.render("new");
})
app.post('/users', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => console.log(err));
    res.redirect('/');
})


app.get('/', (req, res) => {
    User.find()
        .then(data => {
            console.log(data);
            res.render("index", {users: data})
        })
        .catch(err => res.json(err));
});

app.listen(3000, () => console.log("listening on port 3000"));