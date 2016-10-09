$(document).ready(function(){
    /*
    JavaScript, JQuery, Express function to retrieve data from Node.JS server
    */
    $("#attendance").click(function(){
        var TEXT = $.get('/presence').then(function(response){
            //clear div with id='result'
            $("#result").html(""); 
            $("#result").append("<div class='loader'></div>");  
            setTimeout(function () {
                // Add to document using html, rather than tmpContainer

            }, 2000); // 0 milliseconds
            
            window.setTimeout(function() {
        // this will execute 2 second later

        var i;
        if(response!=null){
         $("#result").html(""); 
         for( i = 0; i < response.length; i++){
                //iterate through each user, append information to div
                var person = response[i];
                //data checks
                console.log(response[i]);
                console.log(person.user.name);
                $("#result").append($("<div class='text-left'>"+person.user.name+"    "+ person.user.primary_email.email+"</div>").hide().fadeIn(500));     
            } 
            

        }else{
           $("#result").html("");
           $("#result").append($("<div class='text-left'>No one is currently here</div>").hide().fadeIn(500));     
       }
   }, 1000);

        });

});

$('#roomBtn').click(function(){
    var roomNum = $('#roomBtn').val;
        //deliver roomNum value to quotes.js GET function for presence.
    });

});