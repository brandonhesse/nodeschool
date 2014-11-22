var fs = require('fs');

module.exports = function(dir, ext, callback) {
  var regex = new RegExp('\.'+ext+'$', 'i');
  //console.log(regex);
  fs.readdir(dir, function(err, list) {
    if (err)
      return callback(err);

    list = list.filter(function(file) {
      return file.search(regex) !== -1;
    });

    return callback(null, list);
  });
};
