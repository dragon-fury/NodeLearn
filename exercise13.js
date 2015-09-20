var url = require('url');
var http = require('http');
var port = Number(process.argv[2]);

var server = http.createServer(function (request, response) {
	var parsedUrl = url.parse(request.url, true);
	var isoDate = new Date(parsedUrl.query.iso);
	var json = null;

	if(parsedUrl.pathname === '/api/parsetime') {
		json = {hour: isoDate.getHours(), minute: isoDate.getMinutes(), second: isoDate.getSeconds()};

	} else if(parsedUrl.pathname === '/api/unixtime') {
		json = {unixtime: isoDate.getTime()};
	}

	if(json) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end(JSON.stringify(json));
	}
	else {
		response.writeHead(404);
		response.end();
	}
});
server.listen(port);
