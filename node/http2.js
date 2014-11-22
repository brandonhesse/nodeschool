var http = require('http');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('error', console.error);
  var stream = '';
  response.on('data', function(data) {
    stream += data.toString();
  });
  response.on('end', function() {
    console.log(stream.length);
    console.log(stream);
  })
});
