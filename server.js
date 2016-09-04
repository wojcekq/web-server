var express = require('express');
var app = express();
var PORT = 3000;

//app.get('/', function(request,response){
//    response.send('Hello Express');
//});

var middleware = {
    requireAuthentication: function(request,response, next){
        console.log('private route hit');
        next();
    },
    logger: function(request, response, next){
        //new Date().toString()
        console.log('Request: ' + new Date().toString() + ' ' + request.method + ' ' + request.originalUrl);
        next();
    }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(request,response){
    response.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Express server started, listening on port ' + PORT);
});