const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
   // "mongodb://root:TJV3FdPTsIUe8rCVfzyMafug@stoic-bell-hy3gesodq-db:27017/my-app?authSource=admin"
  "mongodb://localhost:27017/AppDB"
    ,{
    // UseNewUrlParser:true,
    // UseUnifiedTopology:true,
});
const connection=mongoose.connection;

connection.once("open",()=>{
    console.log(
        "MongoDB Connected"
    );
});
app.use(express.json({limit: '15mb'}));

const a1Route= require("./routes/a1");
app.use("/a1",a1Route);

const a2Route= require("./routes/a2");
app.use("/a2",a2Route);


const admainRoute= require("./routes/admain");
app.use("/admain",admainRoute);


const feedbackRoute= require("./routes/feedback");
app.use("/feedback",feedbackRoute);

const Port = process.env.port ||3001;


app.listen(Port, ()=>console.log('your server running on port', Port));
