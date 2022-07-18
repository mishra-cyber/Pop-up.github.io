
$(function()
{
    
    $('.submission').click(function()
    {
        $('#box').fadeOut();
    });

    var check=true;
    $('.clicks').on('click',function(){
        if(check){
            $('#box').fadeOut();
            check = false;
        }
        else{
    
            $('#box').fadeIn();
            check =true;
    }
    }) 
    
})

// $(document).ready(function(){ 

// });