var fs = require('fs');

var fileString = fs.readFileSync(process.argv[2]).toString();
var numNewLines = fileString.split('\n').length -1;

console.log(numNewLines);

