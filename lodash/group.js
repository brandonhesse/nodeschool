/**
 * Created by brandon on 11/23/14.
 */

'use strict';
var _ = require('lodash');

module.exports = function(collection) {
    var grouped = _.groupBy(collection, 'username');
    var result = [];
    _.forEach(grouped, function(value, index) {
        result.push({ username: index, comment_count: _.size(grouped[index]) });
    });

    return _.sortBy(result, function(value) { return -value.comment_count });
};

