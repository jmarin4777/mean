const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const mongoose = require("mongoose");
const app = express();
app.use(express.static(__dirname + "/static")); //establishes static folder (put stylesheets/images here)
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true})); //enables us to access post form data
app.use(session({
    secret: 'secretsession',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(flash());

mongoose.connect('mongodb://localhost/message_boardDB', {useNewUrlParser: true}); //connects to MongoDB

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name field is required"]},
    comment: {type: String, required: [true, "Comment field is required"], minlength: [4, "Comment must be at least 4 characters"]}
}, {timestamps: true});

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name field is required"]},
    message: {type: String, required: [true, "Message field is required"], minlength: [4, "Message must be at least 4 characters"]},
    comments: [CommentSchema]
}, {timestamps: true});

const Message = mongoose.model('Message', MessageSchema);
const Comment = mongoose.model('Comment', CommentSchema);

app.get('/', (req, res) => {
    Message.find()
        .then(allMessages => {
            res.render("index", {messages: allMessages, errors: req.flash('new')});
        })
        .catch(err => res.json(err));
})

app.post('/messages', (req, res) => {
    Message.create(req.body)
        .then(newMessage => {
            console.log('Message posted ', newMessage);
            res.redirect('/');
        })
        .catch(err => {
            for(var key in err.errors){
                req.flash('new', err.errors[key].message);
            }
            res.redirect('/');
        })
    
})

app.post('/messages/:id/comments', (req, res) => {
    Comment.create(req.body)
        .then(newComment => {
            Message.findByIdAndUpdate(req.params.id, {$push: {comments: newComment}})
                .then(updatedMessage => {
                    console.log("Comment: ", newComment, "added to ", updatedMessage);
                    res.redirect('/');
                })
                .catch(err => {
                    console.log("Errors when updating message: ", err);
                    res.redirect('/');
                })
        })
        .catch(err => {
            for(var key in err.errors){
                req.flash('new', err.errors[key].message);
            }
            res.redirect('/');
        })
    
})

app.listen(3000, () => console.log("listening on port 3000"));