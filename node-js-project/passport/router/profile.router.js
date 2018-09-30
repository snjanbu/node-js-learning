const dummy=require('express').Router();

dummy.get('/view',(req,res)=>{
    
        res.send(req.user);
    
});

module.exports=dummy;