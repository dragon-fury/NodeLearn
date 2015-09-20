var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var pathToFile = process.argv[3];

var server = http.createServer(function (request, response) {
	var sourceStream = fs.createReadStream(pathToFile);
	sourceStream.pipe(response);
});
server.listen(port);
