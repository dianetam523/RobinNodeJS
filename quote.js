var express = require('express');
var Robin = require('robin-js-sdk');
var roomNum;
var robin = new Robin('OukU3HqR6O3yPPfEpQbN76lsqhCAZ9B0A7DgbyV9hWpU98evUyy8LPFvfHXr0suMdZbwp0neSPQPE6DK0K03ZN2D0ifvWJuR6oAIeBlIjC6HgUK4B1Mt3AUtkS9AJRko');
var app = express();

app.use(express.static('public'));
app.use(express.bodyParser());

app.get('/', function(req, res) {
   res.send('Hello World');
});

app.get('/index.htm', function(req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

app.get('/presence', function(req, res) {
var peoplePresent = [];
    //TODO catch error when no one in vicinity 16008
    
robin.api.spaces.presence.get(16008).then(function (response) {
  peoplePresent = response.getData();
  res.json(peoplePresent);
    if(peoplePresent[0] != null){
        console.log(peoplePresent[0].space_id);    
    }
    
  
  });
   
});









