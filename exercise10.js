var net = require('net');
var time = require('strftime');
var server = net.createServer(function (socket) {
	socket.end(time('%F %H:%M', new Date()));
});
server.listen(Number(process.argv[2]));
