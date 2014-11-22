var http = require('http');
var urls = process.argv.slice(2);

var registered = [];

function completed(elm) {
  return elm.completed;
}

function checkCompleted() {
  //console.log('Checking status');
  if (registered.length === registered.filter(completed).length) {
    registered.forEach(function(elm) {
      console.log(elm.data);
    });
  }
}


function register(path) {
  var object = {
    uri: path,
    completed: false,
    data: null
  };

  registered.push(object);
  getData(object);
  //console.log(object);
}

function getData(url) {
  http.get(url.uri, function(response) {
    response.setEncoding('utf8');
    response.on('error', console.error);
    var stream = '';
    response.on('data', function(data) {
      stream += data.toString();
    });
    response.on('end', function() {
      url.completed = true;
      url.data = stream;
      checkCompleted();
    });
  });
};

urls.forEach(function(url) {
  register(url);
});
