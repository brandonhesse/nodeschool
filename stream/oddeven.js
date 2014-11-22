var through = require('through');
var split = require('split');

var transform = through(write, end);
var odd = true;

function write(buf) {
  var data = odd ? buf.toString().toLowerCase() : buf.toString().toUpperCase();
  odd = !odd;
  this.queue(data+'\n');
}

function end() {
  this.queue(null);
}

process.stdin.pipe(split()).pipe(transform).pipe(process.stdout);
