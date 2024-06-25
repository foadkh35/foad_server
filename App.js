const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());




const mongooseLink =
"mongodb+srv://foadkhatib5:Foadkh1212@cluster0.l6tcsk2.mongodb.net"

mongoose.connect(mongooseLink);


mongoose.connection.on("connected",() =>{
    console.log("mongo connected")
});


module.exports=app;