const mongoose= require ("mongoose");
const Schema = mongoose.Schema;


const FeedBack =Schema({

   
    descfd:{
        type : String,
        require : true,
    },
    email:{
        type : String,
        require : true,
    },
  
 
});
    

    module.exports= mongoose.model("feedbacks",FeedBack);
    