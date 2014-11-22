var http = require('http');
var url = require('url');
var moment = require('moment');
var time = moment();

var server = http.createServer(function(req, res) {

  var path = url.parse(req.url, true);
  var json = {}, code = 200;

  switch(path.pathname) {
    case '/api/parsetime':
      if(!path.query && !path.query.iso) {
        json.error = 'no iso time supplied';
        json.code = code = 400;
      } else {
        time = moment(path.query.iso);
        json.hour = time.hour();
        json.minute = time.minute();
        json.second = time.second();
      }
      break;
    case '/api/unixtime':
      json.unixtime = time.valueOf();
      break;
    default:
      json.error = 'path not found';
      json.code = code = 404;
  }
  //console.log(path);
  res.writeHead(code, { 'content-type': 'application/json'});
  res.end(JSON.stringify(json));
});

server.listen(process.argv[2]);
