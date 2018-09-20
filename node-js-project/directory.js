var fs=require('fs');
fs.mkdir('NewFolder',function(){
    fs.readFile('readFile.txt','UTF-8',function(error,data){
        fs.writeFile('./NewFolder/writeFile.txt',data,function(error){
            fs.unlink('./NewFolder/writeFile.txt',function(error){
                fs.rmdir('NewFolder',function(error){

                });
            });
        });
    });
});