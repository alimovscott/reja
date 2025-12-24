console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http")

// 1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2
// 3

app.set('views', 'views');
app.set("view engine", "ejs");
// 4
<<<<<<< HEAD

app.get("/hello", function (req, res) {
    res.end("<h1>hello world</h1>");

});
app.get("/gift", (req, res) => {
    res.end("siz sovgalar pechidasiz");
})
=======
app.post("/create-item", function(req, res) {
    console.log(req.body);
    res.json({test:"success"});
})


app.get("/", function (req, res) {
    res.render("harid");

});

>>>>>>> 4e2799e (BRR: build express web server)

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port:${PORT}`)
});
