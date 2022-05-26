const express = require("express");
const { collection } = require("../models/a2s");
const A2=require("../models/a2s");
const router =express.Router();


router.route("/add").get((req,res)=>{
    res.json("your first app 2")
});
router.route("/adda2").post((req,res)=>{
    console.log("inside the a2");
    const a2= new A2({
        
        c2:req.body.c2,
        type:req.body.type,
        name:req.body.name,
        date:req.body.date,
        descpr:req.body.descpr,
        r2:req.body.r2,
        picpr:req.body.picpr,
        d2:req.body.d2,
    });
    a2
    .save()
    .then(()=>{
        console.log("A2 added");
        res.status(200).json("ok");
    })
    .catch((err)=>{
        res.status(403).json({msg :err});
    });

    });


    router.route("/geta2").post((req,res)=>{
        var query = { c2:req.body.c2 , date:req.body.date};
collection.findOne((query), function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
    })}
    );


    router.route("/getalla2").post((req,res)=>{
collection.find({c2:req.body.c2,date:{$gte:req.body.date}} )
.sort({date: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
    })}
    );

    router.route("/getallbeeta2").post((req,res)=>{
collection.find({date:{$gte:req.body.date,$lt:req.body.date1}} )
.sort({date: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
  // console.log(result);
    })}
    );


    router.route("/searcha2").post((req,res)=>{
   var qeuryObg={};
 // console.log(req.body);


       qeuryObg['date']={$gte:req.body[0]};
    if(req.body[1].length>0) {

        qeuryObg['c2']={$in:[req.body[1]]};
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


    router.route("/getcha2s").post((req,res)=>{
collection.find({c2:req.body.c2,date:{$gte:req.body.date1,$lt:req.body.date2}},{ projection: {
     _id: 0,name: 1,d2: 1,type: 1,date:1, } } )
.sort({date: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
    })}
    );

    router.route("/getalla21").post((req,res)=>{
collection.find( )
.sort({date: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
    })}
    );

 

    
   router.route("/deletea2").post((req,res)=>{
collection.deleteOne({c2:req.body.c2,date:req.body.date}, function(err, result) {
   if (err) throw err;
     if (result.deletedCount==1){
         result="success"
     } else{

         result="nulldel";
     };
     
res.status(200).json(
   result);
   })}
   );



module.exports=router;