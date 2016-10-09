$(document).ready(function(){
    /*
    JavaScript, JQuery, Express function to retrieve data from Node.JS server
    */
    $("#attendance").click(function(){
        
        var TEXT = $.get('/presence').then(function(response){
            //clear div with id='result'
            $("#result").html(""); 
            var i;
            for( i = 0; i < response.length; i++){
                //iterate through each user, append information to div
                var person = response[i];
                //data check
                console.log(response[i]);
                console.log(person.user.name);
            $("#result").append("<div class='text-left'>"+person.user.name+" ...... "+ person.user.primary_email.email+"</div>");
                
            }
            
        });
       
    });
    
    $('#roomBtn').click(function(){
        var roomNum = $('#roomBtn').val;
        //deliver roomNum value to quotes.js GET function for presence.
        
    });

});