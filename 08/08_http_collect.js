var http = require('http');

var url = process.argv[2],
    encodedUrl = encodeURI(url),
    dataStr = '';

http.get(encodedUrl, function(response) {
    response.setEncoding('utf8'); // intellij isn't happy. doesn't know setEncoding is available on response
    response.on('data', function(chunk) {
        dataStr += chunk;
    }).on('end', function() {
        console.log(dataStr.length);
        console.log(dataStr);
    }).on('error', function(error) {
        console.error(error);
    });
});