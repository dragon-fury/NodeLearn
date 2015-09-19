var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var ext = "."+process.argv[3];
// var str = fs.readFile(path, 'utf-8', function(err, data) {
// 	if(err) throw err;
// 	console.log(data.split("\n").length-1);
// });

fs.readdir(dirPath, function(err, fileNames) {
	if(err) throw err;
	for(var fileName of fileNames) {
		if(path.extname(fileName) == ext)
			console.log(fileName);
	}
});