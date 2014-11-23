/**
 * Created by brandon on 11/22/14.
 */

var ws = require('websocket-stream');
var stream = ws('ws://localhost:8000');

stream.end('hello\n');