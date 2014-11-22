var through = require('through');

var transform = through(write, end);
var data = '';

function write(buf) {
  console.log(buf.toString());
  data += buf.toString();
}

function end() {
  this.queue(data.reverse());
  this.queue(null);
}

process.stdin.pipe(transform).pipe(process.stdout);
