const { json } = require("express");
const express = require("express");
const { collection } = require("../models/feedbacks");
const FeedBack=require("../models/feedbacks");
const router =express.Router();


router.route("/addfeedback").post((req,res) => {
    console.log("inside the feedback");
    const feedback= new FeedBack({
     
     
        descfd:req.body.descfd,
        email:req.body.email,
       
    });
   // console.log(req.body.descfd);
    feedback
    .save()
    .then(()=>{
        console.log("feedback added");
        res.status(200).json("ok");
    })
    .catch((err)=>{
        res.status(403).json(err);
        console.log("error")
    }); });


    router.route("/getfeedbacklist").post((req,res)=>{

        collection.find().toArray(function(err,result){
        
      
        
            res.status(200).json(result);
            if (err)throw err;
           // console.log(result);
        },)}),

        router.route("/deletefeedback").post((req,res)=>{
            collection.deleteOne({email:req.body.email,descfd:req.body.descfd}, function(err, result) {
               if (err) throw err;
                //   console.log(result);
                 if (result.deletedCount==1){
                     result="success"
                 } else{
            
                     result="nulldel";
                 };
                 
            res.status(200).json(
               result);
            //  console.log(result);
               })}
               );
        

        module.exports=router;