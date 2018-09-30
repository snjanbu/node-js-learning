var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    userName:String,
    googleId:String
});

var user=mongoose.model('user',userSchema);

module.exports=user;
