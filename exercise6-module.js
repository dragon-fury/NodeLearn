var fs = require('fs');
var path = require('path');

var filterFilesWithExtension = function(directoryPath, extension, callback) {
	fs.readdir(directoryPath, function(err, fileNames) {
		if(err) return callback(err);
		var files = [];
		extension = "."+extension;

		for(var fileName of fileNames) {
			if(path.extname(fileName) == extension) files.push(fileName);
		}

		return callback(null, files);
	});
};

module.exports = filterFilesWithExtension;