/**
 * Created by brandon on 11/23/14.
 */

var through = require('through'),
    trumpet = require('trumpet');

function write(buf) {
    this.queue(buf.toString().toUpperCase());
}

function end() {
    this.queue(null);
}

var tr = trumpet();
var stream = tr.select('.loud').createStream();
var transform = through(write);

stream.pipe(transform).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);

