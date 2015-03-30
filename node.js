var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
	console.log("Client connected");
	client.emit('messages', {hello:'world'});
});

app.get('/', function(req, res) {
	//Why wont it send the css and js along with html?
	res.sendFile(__dirname + '/index.html');
	//This does not work. 
	//res.render('index', function(err, html)
	//	{
	//		res.send(html);
	//	});


});

server.listen(8888);