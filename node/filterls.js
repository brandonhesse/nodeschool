var fs = require('fs');
var path = require('path');

var regex = new RegExp('\.'+process.argv[3]+'$', 'i');
fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;
  list.forEach(function(item) {
    if(item.search(regex) !== -1) {
      console.log(item);
    }
  })
});
