/**
 * Created by brandon on 11/23/14.
 */

'use strict';
var _ = require('lodash');

module.exports = function(collection) {
    var result = {
        hot: [],
        warm: []
    };

    function checkTemp(temp) {
        return temp > 19;
    }

    _.forEach(collection, function(town, townname) {
        if (_.every(town, checkTemp)) {
            result.hot.push(townname);
        } else if (_.some(town, checkTemp)) {
            result.warm.push(townname);
        }
    });

    return result;
};

