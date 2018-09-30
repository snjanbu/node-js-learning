var keys=require('./config/keys');
var express=require('express');
var passportConfig=require('./config/config');
var passport=require('passport');
var indexRouter=require('./router/index.router');
var cookieSession=require('cookie-session');
var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookieId]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',indexRouter);

app.get('/profile/view',(req,res)=>{
    res.render('profile');
});


app.get('/',(req,res)=>{
    res.render('home');
});

app.listen(3000);