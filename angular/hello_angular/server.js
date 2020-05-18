const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public/dist/public")); //establishes static folder (put stylesheets/images here)
app.use(express.urlencoded({extended: true})); //enables us to access post form data
app.use(express.json()); //enables Express to read JSON

require('./server/config/routes.js')(app);

app.listen(3000, () => console.log("listening on port 3000"));