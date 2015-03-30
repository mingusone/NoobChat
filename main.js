var socket = io.connect('http://localhost:8888')

socket.on('messages', function(data))
{
	alert(data.hello);
});