var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

//app.get('/', function(request,response){
//    response.send('Hello Express');
//});

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(request,response){
    response.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Express server started, listening on port ' + PORT);
});