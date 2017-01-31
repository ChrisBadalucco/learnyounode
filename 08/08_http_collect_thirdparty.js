var concat = require('concat-stream');
var http = require('http');

var url = process.argv[2],
    encodedUrl = encodeURI(url);

http.get(encodedUrl, function(response) {
    response.pipe(concat(function(data) {
        console.log(data.toString().length);
        console.log(data.toString());
    })).on('error', function(error) {
        console.error(error);
    });
});