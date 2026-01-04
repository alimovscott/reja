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

// 1 kirish kodlari
// bu google chromega public folderni ochib beradi
app.use(express.static("public"));


// bu kirib kelayatgon json formatdagi datani object holatiga ugirib beradi
app.use(express.json());


// bu bizga agar formdan biror narsani post qilsak express serverimiz qabul qilib oladi agr bu bulamasa qabul qilmedi
app.use(express.urlencoded({extended: true}));

// 2 Session bogliq kodlar
// 3 veiwga bogliq kodlar
// bu BSSR yulni tanladik bu tradiational usul hisoblanadi ejs folderni kursatish uchun foydalanyapmiz
app.set('views', 'views');
// bu bizga ejsni kursatadi
app.set("view engine", "ejs");
// 4 routing bogliq kodlar


app.post("/delete-item", function(req, res) {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        res.json({state:"success"});
    })
    // console.log(id);
    

})


app.post("/create-item", function(req, res) {
    console.log("user entered b /create-item");
    const new_reja = req.body.reja; 
    console.log("new_reja",new_reja)
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        res.json(data.ops[0]);
        
    })

    
})


app.post("/edit-item", function(req, res) {
   const data = req.body;
   console.log(data);
   db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id)},
   {$set: {reja: data.new_input}}, 
   function(err,data) {
    res.json({state: "success"});
   })
});


app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
            res.json({state: "hamma rejalar ochirildi"});
        });
    }
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
            console.log("data:",data)
        }
    });
});

app.get("/author", function(req, res) {
    res.render("author", {user: user} );
})



module.exports = app;




// node js single thread  libuv 