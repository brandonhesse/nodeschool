var net = require('net');
var moment = require('moment');

var server = net.createServer(function(socket) {
  var date = moment();
  socket.end(date.format('YYYY-MM-DD HH:mm\n'));
});

server.listen(process.argv[2]);
