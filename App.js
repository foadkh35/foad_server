const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());




const mongooseLink =
"mongodb+srv://foadkhatib5:FoadKh123@cluster0.l6tcsk2.mongodb.net/";
mongoose.connect(mongooseLink);
mongoose.connection.on("connectes",() =>{
    console.log("mongo connected")
});


module.exports=app;