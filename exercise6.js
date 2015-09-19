var filterModule = require('./exercise6-module');
var directory = process.argv[2];
var extension = process.argv[3];

var callback = function(err, fileNames) {
	if(err) console.log("The following error occured: "+ err);

	fileNames.forEach(function(fileName) {
		console.log(fileName);
	});
};

filterModule(directory, extension, callback);
