var http=require('http');

var server =http.createServer(function(request,response){
    console.log(request.url);
    response.writeHeader(200,{'Content-Type':'application/json'});
    var returnObj={
        'name':'Sanjayanbu',
        'project':'HUE'
    };
    response.end(JSON.stringify(returnObj));
});

server.listen(3000,'127.0.0.1');