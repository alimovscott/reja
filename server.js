 
// serverni qurish uchun yordam beradi
const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Alimovabduqodir:CIy4FmSnIsvARjUI@mern-dev.biwrj7v.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
     (err, client) => {
        if(err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection Succeed")
            module.exports = client;
            const app = require("./app");
            // bu server expressdagi app ni ulab olyapmiz va u 3000-chi portda listen qilyapti
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function() {
            console.log(`The server is running successfully on port:${PORT}, http://localhost:${PORT}`)
              });



        }

});





