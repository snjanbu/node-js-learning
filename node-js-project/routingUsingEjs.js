var express=require('express');
var bodyParser=require('body-parser');

var api=express();

var urlEncodedParser=bodyParser.urlencoded({ extended: false });

console.log(urlEncodedParser);

api.set('view engine','ejs');
api.use('/assets',express.static(__dirname+'/views/assets'));

api.post('/contact',urlEncodedParser,function(request,response){
    var body1=request.body;
    console.log(body1);
    response.render('contact-success',{data:body1});
});

api.get('/home',function(request,response){
    response.render('index');
});

api.get('/contact',function(request,response){
    var queryString=request.query;
    response.render('contact',{qs:queryString});
});

api.get('/',function(request,response){
    response.render('index');
});

api.get('/profile/:id',function(request,response){
    var data={
        age:'34',
        bio:'Web Developer',
        interests:['java','JS']
    };
    response.render('profile',{personId:request.params.id,data:data});
});

api.get('*',function(request,response){
    response.render('error');
});

api.listen(3000);