const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/AppDB",{
    // UseNewUrlParser:true,
    // UseCreateIndex:true,
    // UseUnifiedTopology:true,
});
const connection=mongoose.connection;

connection.once("open",()=>{
    console.log(
        "MongoDB Connected"
    );
});
app.use(express.json({limit: '15mb'}));

const channelRoute= require("./routes/channel");
app.use("/channel",channelRoute);

const programRoute= require("./routes/program");
app.use("/program",programRoute);


const admainRoute= require("./routes/admain");
app.use("/admain",admainRoute);


const feedbackRoute= require("./routes/feedback");
app.use("/feedback",feedbackRoute);

const Port = process.env.port|| 5001;


app.listen(Port, ()=>console.log('your server running on port', Port));
