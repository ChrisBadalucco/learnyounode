module.exports = function(dirName, fileExt, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dirName, function(err, files) {
        if (err) {
            return callback(err);
        } else {
            var data = [];
            files.forEach(function(file) {
                if (path.extname(file) === '.' + fileExt) {
                    data.push(file);
                }
            });
            callback(null, data);
        }
    });
};