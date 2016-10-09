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
<<<<<<< HEAD
            $("#result").append("<div class='text-left'>"+person.user.name+" ...... "+ person.user.primary_email.email+"</div>");
                
=======
            $("#result").append("<div class='text-left'>"+person.user.name+"    "+ person.user.primary_email.email+"</div>");     
>>>>>>> 5466bdb433cbf4c9624dd61fc78a746989b48050
            }
            
        });
       
    });
    
    $('#roomBtn').click(function(){
        var roomNum = $('#roomBtn').val;
        //deliver roomNum value to quotes.js GET function for presence.
        
    });

});