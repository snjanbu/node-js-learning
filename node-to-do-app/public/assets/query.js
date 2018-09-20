$(document).ready(function(){
    $('form').on('submit',function(){
         var item=$('form input');
         var todo={item:item.val()};
         
         $.ajax({
             url:'/todo',
             type:'POST',
             data:todo,
             success:function(data){
                 location.reload();
             }
         });
         return false;
    });

    $('li').on('click',function(){
        var data=$(this).text().replace(/ /g, "-");
        $.ajax({
            url:'/todo/'+data,
            type:'DELETE',
            data:data,
            success:function(data){
                location.reload();
            }
        });
        return false;
    });
});