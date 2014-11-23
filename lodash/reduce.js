/**
 * Created by brandon on 11/23/14.
 */

'use strict';
var _ = require('lodash');

module.exports = function(orders) {
    var reduced = [];
    var total;

    orders = _.groupBy(orders, 'article');

    _.forEach(orders, function(item, key) {
        total = _.reduce(item, function (acc, value) {
            return acc + value.quantity;
        }, 0);

        reduced.push({
            article: parseInt(key, 10),
            total_orders: total
        });
    });

    return _.sortBy(reduced, 'total_orders').reverse();


};

