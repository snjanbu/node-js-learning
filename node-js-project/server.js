var http=require('http');
var server=http.createServer(function(request,response){
    console.log(request.url);
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Welcome to Node JS server');
});
server.listen(3000,'127.0.0.1');
