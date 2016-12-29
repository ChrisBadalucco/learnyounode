module.exports = {
    filterList: function(dirName, fileExt, callback) {
        var fs = require('fs');
        var path = require('path');

        fs.readdir(dirName, function(err, files) {
            if (err) {
                // console.err(err)
                return callback(err);
            } else {
                var data = [];
                files.forEach(function(file) {
                    if (path.extname(file) === fileExt) {
                        // console.log(file);
                        data.push(file);
                    }
                });
                callback(null, data);
            }
        });
    }
};