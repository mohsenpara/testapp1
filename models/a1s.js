const mongoose= require ("mongoose");
const Schema = mongoose.Schema;

//ch
const A1 =Schema({
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
    f1:{
        type : String,
        require : true,
    },
    s1:{
        type : String,
    },
    });
    

    module.exports= mongoose.model("a1s",A1);
    