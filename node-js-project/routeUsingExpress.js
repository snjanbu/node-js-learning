var express=require('express');
var api=express();

api.listen(3000);

api.get('/',function(request,response){
    response.sendFile(__dirname+'/index.html');
});

api.get('/home',function(request,response){ 
    response.sendFile(__dirname+'/index.html');
});

api.get('/profile/:id',function(request,response){
    response.send(`Displaying a user of id:${request.params.id}`)
});

api.get('*',function(request,response){
    response.sendFile(__dirname+'/error.html');
});