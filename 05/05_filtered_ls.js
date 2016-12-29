var fs = require('fs');
var path = require('path');

var inputPath = process.argv[2],
    inputExt = '.' + process.argv[3];

fs.readdir(inputPath, function(err, files) {
    if (err) {
        console.err(err)
    } else {
        files.forEach(function(file) {
            if (path.extname(file) === inputExt) {
                console.log(file);
            }
        });
    }
});