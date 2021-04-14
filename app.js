//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip";
const homeHeading = "Countdown Radio";


const app = express();

let posts = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home", {
        homePageHeading: homeHeading,
        homePageContent: homeStartingContent
    });
});

app.get("/album-reviews", function(req, res) {
    res.render("album-reviews");
});

app.get("/song-of-the-week", function(req, res) {
    res.render("song-of-the-week");
});

app.get("/top-20", function(req, res) {
    res.render("top-20");
});

app.get("/posts", function(req, res) {
    res.render("posts");
});

app.get("/compose371", function(req, res) {
    res.render("compose");
});

app.post("/compose", function(req, res) {
    const newPost = {
        title: req.body.postTitle,
        content: req.body.postContent
    }

posts.push(newPost);

res.redirect("/");
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});