/**
 * Created by brandon on 11/23/14.
 */

'use strict';
var _ = require('lodash');

module.exports = function(collection) {
    return _.forEach(collection, function(value, index) {
        if (value.population > 1.0) {
            collection[index].size = 'big';
        } else if (value.population < 1.0 && value.population > 0.5) {
            collection[index].size = 'med';
        } else {
            collection[index].size = 'small';
        }

        return collection;
    });
};

