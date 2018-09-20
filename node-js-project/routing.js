var fs=require('fs');
var http=require('http');

var server =http.createServer(function(request,response){
    var url=request.url;
    if(url==='/home' || url === '/index'){
        response.writeHeader(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(response);
    }else if(url === '/json'){
        response.writeHeader(200,{'Content-Type':'application/json'});
        var returnObj={
            name:'Sanjay',
            project:'HUE'
        };
        response.end(JSON.stringify(returnObj));
    }else{
        response.writeHeader(404,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/error.html').pipe(response);
    }
});

server.listen(3000,'127.0.0.1');