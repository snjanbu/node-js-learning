var fs=require('fs');
//Synchronous File Read(Blocking Mode)
var data=fs.readFileSync('readFile.txt','UTF-8');
//Asynchronous File Read
fs.readFile('readFile.txt','UTF-8',function(error,text){
    fs.writeFile('writeFile.txt',text,function(error){
        
    });
});

console.log('test');