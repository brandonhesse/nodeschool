/**
 * Created by brandon on 11/23/14.
 */

'use strict';
var _ = require('lodash');

module.exports = function(freelancers) {
    var result = {
        average: 0,
        underperform: [],
        overperform: []
    };

    freelancers = _.sortBy(freelancers, 'income');

    result.average = _.reduce(freelancers, function(total, freelancer) {
        return total + freelancer.income;
    }, 0) / _.size(freelancers);

    result.underperform = _.filter(freelancers, function(object) {
        return object.income <= result.average;
    });

    result.overperform = _.filter(freelancers, function(object) {
        return object.income > result.average;
    });

    return result;
};

