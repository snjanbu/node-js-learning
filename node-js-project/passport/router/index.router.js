var express=require('express');
var indexRouter=express.Router();
var passport=require('passport');
var keys=require('../config/keys');
var mongoose=require('mongoose');

mongoose.connect(keys.mongodb.uri,{useNewUrlParser:true},()=>{
    console.log('Data base connected successfully');
});

indexRouter.get('/login',(req,res)=>{
    res.render('login');
});

indexRouter.get('/logout',(req,res)=>{
    res.send('Logging out');
    req.logout();
});

indexRouter.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

indexRouter.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('Redirected successfully');
});

module.exports=indexRouter;