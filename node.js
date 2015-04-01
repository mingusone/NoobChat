var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.get('/', function(req, res) {
	//Why wont it send the css and js along with html?
	res.sendFile(__dirname + '/index.html');
});

io.set('origins', 'http://noobchat.herokuapp.com/:80'); // For firefox. Because of "Same origin policy"

io.on('connection', function(client){
	//console.log("Client connected");
	//client.on('disconnect',function(socket){
	//	console.log("client disconnected");
	//});
	client.on('NewChat', function(chat){
		console.log(chat);
		io.emit('NewChat', chat);
	});
});

server.listen(process.env.PORT || 8888);