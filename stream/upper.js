var through = require('through');

var transform = through(write, end);

function write(buf) {
  var data = buf.toString().toUpperCase();
  this.queue(data);
}

function end() {
  this.queue(null);
}

process.stdin.pipe(transform).pipe(process.stdout);
