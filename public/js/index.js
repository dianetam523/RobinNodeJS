$(document).ready(function(){

    $("#attendance").click(function(){
        var TEXT = $.get('/presence').then(function(response){
            var i;
            for( i = 0; i < response.length; i++){
                var person = response[i];
                console.log(response[i]);
                console.log(person.user.name);
            $("#result").append("<div class='text-left'>"+person.user.name+" ...... "+ person.user.primary_email.email+"</div>");     
            }
            
        });
       
    });

});