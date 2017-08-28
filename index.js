var express = require('express');
var path = require('path');
var app = express();

app.use('/css', express.static(__dirname + '/css'));

app.get('/', function(request, response){
	// response.send('Hello there');
	response.sendFile('index.html', {root: __dirname});
});

app.listen(1337);