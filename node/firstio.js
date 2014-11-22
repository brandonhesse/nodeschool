var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]); // Sync
var lines = buffer.toString().split('\n').length - 1;
console.log(lines);
