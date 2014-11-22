var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  var buffer = fs.createReadStream(process.argv[3]);
  buffer.pipe(res);
});

server.listen(process.argv[2]);
