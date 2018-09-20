var fs = require('fs');
var http =require('http');

/*
Creating a http server
*/
var server=http.createServer(function(request,response){
    console.log('Started server');
    response.writeHeader(200,{'Content-Type':'text/html'});
    let rStream=fs.createReadStream(__dirname+'/index.html');
    rStream.pipe(response);
});

server.listen(3000,'localhost');

console.log(__dirname + '/readStream.txt');

var readStream = fs.createReadStream(__dirname + '/readStream.txt');
var writeStream = fs.createWriteStream(__dirname + '/writeStream.txt');
var count = 0;

readStream.on('data', function (chunk) {
    writeStream.write(chunk);
    count = count + 1;
});

readStream.on('close', function () {
    console.log(`Total Chunks Received are:${count}`);
});

readStream.pipe(writeStream);

