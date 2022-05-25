const mongoose= require ("mongoose");
const Schema = mongoose.Schema;


const Channel =Schema({
    _id:{
        type : Number,
        require : true,
    },
    name:{
        type : String,
        require : true,
    },
    descch:{
        type : String,
        require : true,
    },
    picch:{
        type : String,
        require : true,
    },
    freq:{
        type : String,
        require : true,
    },
    site:{
        type : String,
    },
    });
    

    module.exports= mongoose.model("channels",Channel);
    