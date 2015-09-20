var concatStream = require('concat-stream');
var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var responseCount = 0;
var responses = [];

var printResponses = function() {
	for(var order in responses) {
		console.log(responses[order]);
	}
};

var hitAndGet = function(idx) {
	http.get(urls[idx], function(response) {
		var completeString = ""; 
		response.setEncoding("utf8");
		response.on("error", console.error);
		response.pipe(concatStream(function(data) {	    
				responses[idx] = data;
				responseCount++;

				if(responseCount === 3)
					printResponses();
			})
		);
	});
};

for(var idx in urls) {
	hitAndGet(idx);
}