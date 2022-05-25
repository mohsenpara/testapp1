const mongoose= require ("mongoose");
const Schema = mongoose.Schema;


const Admain =Schema({

   
    lineCount1:{
        type : Number,
        require : true,
    },
    itemCount2:{
        type : Number,
        require : true,
    },
    header1txt:{
        type:Array,
        require:true,
    },

    headertxtcolor:{
        type:Number,
        require:true
    
    },
    backbodycolor:{
        type:Number,
        require:true
    
    },
    backkeycolor:{
        type:Number,
        require:true
    
    },
    backkeytxtcolor:{
        type:Number,
        require:true
    },
    channel:{
        type : Array,
        
        },
    type:{
            type : Array,
        },
    name:{
            type:Array,
        },
     date:{
        type:Array,
        
        },
     
    picpr:{
        type:Array,
        },
        appvr:{
            type:Number,
        },
        apprating:{
type:Number,
        },
 
});
    

    module.exports= mongoose.model("admains",Admain);
    