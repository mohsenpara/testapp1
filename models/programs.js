const { Int32 } = require("mongodb");
const mongoose= require ("mongoose");
const Schema = mongoose.Schema;

const Program =Schema({
channel:{
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
duration:{
    type:Number,
    require:true,
},
repeat:{
type : Boolean,
},
picpr:{
type:String,
},
});
module.exports= mongoose.model("programs",Program);