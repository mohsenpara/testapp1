const { json } = require("express");
const express = require("express");
const { Db } = require("mongodb");
const admains = require("../models/admains");
const { collection, db } = require("../models/admains");
const Admain =require("../models/admains");
const router =express.Router();



router.route("/addad").post((req,res) => {
   
    collection.drop().then(()=>{

        console.log("collection dropped");
        const ad1= new Admain({
            lineCount1:req.body.lineCount1,
            itemCount2:req.body.itemCount2,
            header1txt:req.body.header1txt,
            headertxtcolor:req.body.headertxtcolor,
            backbodycolor:req.body.backbodycolor,
            backkeycolor:req.body.backkeycolor,
            backkeytxtcolor:req.body.backkeytxtcolor,
            channel:req.body.channel,
            type:req.body.type,
            name:req.body.name,
            date:req.body.date,
            picpr:req.body.picpr,
            appvr:req.body.appvr,
            apprating:req.body.apprating,
        });
        ad1
        .save()
        .then(()=>{
            console.log("ad added");
            
            var stats = collection.stats(function(err, stats) {
                // second parameter stats contains the result from  stats
               var storageSize = stats.size/1000000;
                console.log(storageSize);
              });
             //console.log(storageSize);
            res.status(200).json("ok");
        })
        .catch((err)=>{
            res.status(403).json(err);
            console.log(err)
        }); });
    });


    router.route("/getadmain").post((req,res)=>{
        collection.findOne(function(err, result) {
            if (err) throw err;
        res.status(200).json(result);
         
       
            })}
            );






module.exports=router;