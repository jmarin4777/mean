const express = require('express');
const app = express();

//extracts body of a request and makes it available via req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to database
require('./server/config/mongoose.js');

//import routes
const ideasRoute = require('./server/routes/ideas.js');

app.use('/ideas', ideasRoute);

//start listening to server
app.listen(3000, () => console.log('listening on port 3000'));