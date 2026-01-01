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
const db = require("./server").db();
const mongodb = require("mongodb");

// 1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2
// 3

app.set('views', 'views');
app.set("view engine", "ejs");
// 4


app.post("/delete-item", function(req, res) {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        res.json({state:"success"})
    })
    // console.log(id);
    

})


app.post("/create-item", function(req, res) {
    console.log("user entered b /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        res.json(data.ops[0]);
    })

    
})


app.get("/", function (req, res) {
   console.log("user entered a /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else{
            
            res.render("reja", {items: data});
        }
    });
});

app.get("/author", function(req, res) {
    res.render("author", {user: user} );
})



module.exports = app;