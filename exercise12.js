 var map = require('through2-map');
 var http = require('http');
 var port = Number(process.argv[2]);

 var server = http.createServer(function (request, response) {
 	if(request.method !== "POST") return response.end("POST request is expected.");
 	request.pipe(map(function(data){
 		return data.toString().toUpperCase();
 	})).pipe(response);
 });
 server.listen(port);
