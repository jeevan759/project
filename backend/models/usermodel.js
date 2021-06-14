const mongoose=require('mongoose')
var userSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    role:{type:String,enum: ['admin','user']},
    password:String,
    username:String,
    isDeleted:Boolean,
    profilePicUrl:String

})
var usermodel = mongoose.model('user',userSchema);
module.exports = usermodel;