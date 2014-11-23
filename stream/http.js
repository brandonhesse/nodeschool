/**
 * Created by brandon on 11/22/14.
 */

var through = require('through'),
    http = require('http');

function write(buf) {
    var data = buf.toString('ascii').toUpperCase();
    this.queue(data);
}

function end() {
    this.queue(null);
}

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(through(write, end)).pipe(res);
    }
});
server.listen(process.argv[2]);