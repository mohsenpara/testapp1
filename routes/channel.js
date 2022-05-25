const { json } = require("express");
const express = require("express");
const { collection } = require("../models/channels");
const Channel=require("../models/channels");
const router =express.Router();



router.route("/addchannel").post((req,res) => {
    console.log("inside the channel");
    const channel= new Channel({
        _id:req.body.id,
        name:req.body.name,
        descch:req.body.descch,
        picch:req.body.picch,
        freq:req.body.freq,
        site:req.body.site,
    });
    console.log(req.body.id);
    channel
    .save()
    .then(()=>{
        console.log("Channel added");
        res.status(200).json("ok");
    })
    .catch((err)=>{
        res.status(403).json(err);
        console.log("error")
    }); });



//2_channel_show_to_correct
    router.route("/getchannel").post((req,res)=>{
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


    router.route("/getchannelid").post((req,res)=>{
     var query = { _id:Number(req.body.id) };
collection.findOne((query), function(err, result) {
    if (err) throw err;
       // console.log(result);
        //result=null;
res.status(200).json(
    result);
   //console.log(result);
    })}
    );

    router.route("/changechannelid").post((req,res)=>{
        var query = { name: req.body.name};
        collection.find((query)).toArray( function(err, result) {
            if (err) throw err;
            var array = result.map(function(item) {
                const channel= new Channel({
                    _id:req.body.id,
                    name:item.name,
                    descch:item.descch,
                    picch:item.picch,
                    freq:item.freq,
                    site:item.site,
                });
                channel
                .save()
                .then(()=>{
                    console.log("Channel added");
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


    router.route("/deletechannel").post((req,res)=>{
     var query = { name: req.body.name };
collection.deleteOne((query), function(err, result) {
    if (err) throw err;
       // console.log(result);
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



    router.route("/getallchannel").post((req,res)=>{
      
   collection.find().sort({_id: 1}) .toArray(function(err, result) {
    if (err) throw err;
res.status(200).json(
    result);
  // console.log(result);
    })}
    );

//channel correction

    router.route("/getchannellist").post((req,res)=>{

collection.find({}, { projection: { _id:0, name: 1 } }).sort({  "_id": 1 }).toArray(function(err,result){

    var array = result.map(function(item) {
        return item.name;
    });

    res.status(200).json(array);
    if (err)throw err;
   // console.log(array);
},)}),


    router.route("/getchannelidlist").post((req,res)=>{

collection.find({}, { projection: { _id:1, name: 1 } }).sort({  "_id": 1 }).toArray(function(err,result){

    var array = result.map(function(item) {
        return [item.name,item._id];
    });

    res.status(200).json(array);
    if (err)throw err;
   // console.log(array);
},)}),


    router.route("/getchannelpiclist").post((req,res)=>{

collection.find({}, { projection: { _id: 0, picch: 1 } }).sort({  "_id": 1 }).toArray(function(err,result){

    var array = result.map(function(item) {
        return item.picch;
    });

    res.status(200).json(array);
    if (err)throw err;
  //  console.log(array);
},)}),
    router.route("/getchannelnplist").post((req,res)=>{

collection.find({}, { projection: { _id: 0, picch: 1,name:1 } }).sort({  "_id": 1 }).toArray(function(err,result){

    var array = result.map(function(item) {
        return [item.name,item.picch];
    });

    res.status(200).json(array);
    if (err)throw err;
   // console.log(array);
},)}),



module.exports=router;