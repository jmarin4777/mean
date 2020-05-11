const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cars", (req, res) =>{
    res.render('cars')
})
app.get("/cats", (req, res) =>{
    res.render('cats')
})
app.get("/cars/new", (req, res) =>{
    res.render('form')
})
app.get("/cuddles", (req, res) =>{
    var cat_info = {
        name: "cuddles",
        age: 3,
        sleep_spots: ["under the bed", "on the windowsill"],
        image: "images/kitten.jpg"
    }
    res.render('details', {cats: cat_info})
})
app.get("/bubbles", (req, res) =>{
    var cat_info = {
        name: "bubbles",
        age: 2,
        sleep_spots: ["on top of the dressor", "on the couch"],
        image: "images/kitten2.png"
    }
    res.render('details', {cats: cat_info})
})

app.use(express.static(__dirname + "/static"));
app.listen(3000, () => console.log("listening on port 3000"));
