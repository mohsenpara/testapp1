const { Int32 } = require("mongodb");
const mongoose= require ("mongoose");
const Schema = mongoose.Schema;
//p
const A2 =Schema({
c2:{
type : String,
   require : true,

},
 type:{
    type : String,
    require:true,
},
name:{
    type:String,
    require:true,
},
date:{
type:String,

},
descpr:{ 
    type:String,
    require:true,
},
d2:{
    type:Number,
    require:true,
},
r2:{
type : Boolean,
},
picpr:{
type:String,
},
});
module.exports= mongoose.model("a2s",A2);