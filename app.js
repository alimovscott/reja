console.log("Web Serverni boshlash");
const express = require("express");
const app = express();

const fs = require("fs");
const {json} = require("stream/consumers");

let user;
fs.readFile("database/users.json", "utf8", (err,data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
})

// MongoDB chaqirish
const db =require("./server").db();

// 1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2
// 3

app.set('views', 'views');
app.set("view engine", "ejs");
// 4


app.get("/hello", function (req, res) {
    res.end("<h1>hello world</h1>");

});
app.get("/gift", (req, res) => {
    res.end("siz sovgalar pechidasiz");
})

app.post("/create-item", function(req, res) {
    console.log(req.body);
    res.json({test:"success"});
})


app.get("/", function (req, res) {
    res.render("reja");

});

app.get("/author", function(req, res) {
    res.render("author", {user: user} );
})



module.exports = app;