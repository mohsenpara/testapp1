const { json } = require("express");
const express = require("express");
const { collection } = require("../models/a1s");
const A1=require("../models/a1s");
const router =express.Router();



router.route("/adda1").post((req,res) => {
    console.log("inside the a1");
    const a1= new A1({
        _id:req.body.id,
        name:req.body.name,
        descch:req.body.descch,
        picch:req.body.picch,
        f1:req.body.f1,
        s1:req.body.s1,
    });
    console.log(req.body.id);
    a1
    .save()
    .then(()=>{
        console.log("A1 added");
        res.status(200).json("ok");
    })
    .catch((err)=>{
        res.status(403).json(err);
        console.log("error")
    }); });



//2_a1_show_to_correct
    router.route("/geta1").post((req,res)=>{
     var query = { name: req.body.name};
collection.findOne((query), function(err, result) {
    if (err) throw err;
        console.log(result);
        //result=null;
res.status(200).json(
    result);
  // console.log(result);
    })}
    );


    router.route("/geta1id").post((req,res)=>{
     var query = { _id:Number(req.body.id) };
collection.findOne((query), function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
    })}
    );

    router.route("/changea1id").post((req,res)=>{
        var query = { name: req.body.name};
        collection.find((query)).toArray( function(err, result) {
            if (err) throw err;
            var array = result.map(function(item) {
                const a1= new A1({
                    _id:req.body.id,
                    name:item.name,
                    descch:item.descch,
                    picch:item.picch,
                    f1:item.f1,
                    s1:item.s1,
                });
                a1
                .save()
                .then(()=>{
                    console.log("A1 added");
                    res.status(200).json("ok");
                })
                .catch((err)=>{
                    res.status(403).json(err);
                    console.log("error")
                });
                var query = { _id: item._id };
                collection.deleteOne((query));
            });
        
            
          
           
            })



        });


    router.route("/deletea1").post((req,res)=>{
     var query = { name: req.body.name };
collection.deleteOne((query), function(err, result) {
    if (err) throw err;
      if (result.deletedCount==1){
          result="success"
      } else{

          result="null";
      };
      
res.status(200).json(
    result);
  // console.log(result);
    })}
    );



    router.route("/getalla1").post((req,res)=>{
      
   collection.find().sort({_id: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
  // console.log(result);
    })}
    );

//a1 correction

    router.route("/geta1list").post((req,res)=>{

collection.find({}, { projection: { _id:0, name: 1 } }).sort({  "_id": 1 }).toArray(function(err,result){

    var array = result.map(function(item) {
        return item.name;
    });

    res.status(200).json(array);
    if (err)throw err;
   // console.log(array);
},)}),


    router.route("/geta1idlist").post((req,res)=>{

collection.find({}, { projection: { _id:1, name: 1 } }).sort({  "_id": 1 }).toArray(function(err,result){

    var array = result.map(function(item) {
        return [item.name,item._id];
    });

    res.status(200).json(array);
    if (err)throw err;
   // console.log(array);
},)}),


    router.route("/geta1piclist").post((req,res)=>{

collection.find({}, { projection: { _id: 0, picch: 1 } }).sort({  "_id": 1 }).toArray(function(err,result){

    var array = result.map(function(item) {
        return item.picch;
    });

    res.status(200).json(array);
    if (err)throw err;
  //  console.log(array);
},)}),
    router.route("/geta1nplist").post((req,res)=>{

collection.find({}, { projection: { _id: 0, picch: 1,name:1 } }).sort({  "_id": 1 }).toArray(function(err,result){

    var array = result.map(function(item) {
        return [item.name,item.picch];
    });

    res.status(200).json(array);
    if (err)throw err;
},)}),



module.exports=router;