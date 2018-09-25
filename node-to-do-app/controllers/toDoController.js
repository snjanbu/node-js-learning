var bodyParser=require('body-parser');
var mongoose=require('mongoose');

mongoose.connect('mongodb://sanjay:sanjay123@ds161112.mlab.com:61112/todoapplication');
var schema=new mongoose.Schema({
    item:String
});

var todo=mongoose.model('Todo',schema);

var urlEncodedParser=bodyParser.urlencoded({extended:false});
module.exports=function(app){

    app.get('/todo',function(req,res){
        todo.find({},function(error,data){
            if(error){
                throw error;
            }
            res.render('toDoList',{datas:data});
        });
    });

    app.post('/todo',urlEncodedParser,function(req,res){
        var item=req.body;
        console.log(item);
        todo(item).save(function(error,data){
            if(error){
                throw error;
            }
            res.json(data);
        });
    });

    app.delete('/todo/:id',function(req,res){
        var itemValue=req.params.id;
        todo.find({item:itemValue.trim()}).remove(function(error,data){
            if(error){
                throw error;
            }
            res.json(data);
        });
    });
};