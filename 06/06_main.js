var filtering = require('./filtering');

var inputPath = process.argv[2],
    inputExt = process.argv[3];

filtering(inputPath, inputExt, function(err, data) {
    if (err) {
        console.err(err);
    } else {
        data.forEach(function(it) {
            console.log(it);
        });
    }
});