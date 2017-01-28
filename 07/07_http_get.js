var http = require('http');

var url = process.argv[2],
encodedUrl = encodeURI(url);

http.get(encodedUrl, function(response) {
    response.setEncoding('utf8'); // intellij isn't happy. doesn't know setEncoding is available on response
    response.on('data', function(data) {
        console.log(data);
    })
});