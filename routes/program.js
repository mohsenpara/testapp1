const express = require("express");
const { collection } = require("../models/programs");
const Program=require("../models/programs");
const router =express.Router();


router.route("/add").get((req,res)=>{
    res.json("your first app 2")
});
router.route("/addprogram").post((req,res)=>{
    console.log("inside the program");
    const program= new Program({
        
        channel:req.body.channel,
        type:req.body.type,
        name:req.body.name,
        date:req.body.date,
        descpr:req.body.descpr,
        repeat:req.body.repeat,
        picpr:req.body.picpr,
        duration:req.body.duration,
    });
    program
    .save()
    .then(()=>{
        console.log("Program added");
        res.status(200).json("ok");
    })
    .catch((err)=>{
        res.status(403).json({msg :err});
    });

    });


    router.route("/getprogram").post((req,res)=>{
        var query = { channel:req.body.channel , date:req.body.date};
collection.findOne((query), function(err, result) {
    if (err) throw err;
     //   console.log(result);
        //result=null;
res.status(200).json(
    result);
  // console.log(result);
    })}
    );


    router.route("/getallprogram").post((req,res)=>{
collection.find({channel:req.body.channel,date:{$gte:req.body.date}} )
.sort({date: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
  // console.log(result);
    })}
    );

    router.route("/getallbeetprogram").post((req,res)=>{
collection.find({date:{$gte:req.body.date,$lt:req.body.date1}} )
.sort({date: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
  // console.log(result);
    })}
    );


    router.route("/searchprogram").post((req,res)=>{
   var qeuryObg={};
 // console.log(req.body);


       qeuryObg['date']={$gte:req.body[0]};
    if(req.body[1].length>0) {

        qeuryObg['channel']={$in:[req.body[1]]};
    } 
  
    if(req.body[2].length>0) {  qeuryObg['type']={$in:[req.body[2]]};}
    if(req.body[3].length>0) { qeuryObg['name']={$regex: req.body[3]}}
   
  // console.log(qeuryObg);
     
   
collection.find( (qeuryObg)).sort({date: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
  // console.log(result);
    })}
    );



    router.route("/getchprograms").post((req,res)=>{
collection.find({channel:req.body.channel,date:{$gte:req.body.date1,$lt:req.body.date2}},{ projection: {
     _id: 0,name: 1,duration: 1,type: 1,date:1, } } )
.sort({date: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
  // console.log(result);
    })}
    );

    router.route("/getallprogram1").post((req,res)=>{
collection.find( )
.sort({date: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
  // console.log(result);
    })}
    );



    
   router.route("/deleteprogram").post((req,res)=>{
collection.deleteOne({channel:req.body.channel,date:req.body.date}, function(err, result) {
   if (err) throw err;
      // console.log(result);
     if (result.deletedCount==1){
         result="success"
     } else{

         result="nulldel";
     };
     
res.status(200).json(
   result);
 // console.log(result);
   })}
   );



module.exports=router;