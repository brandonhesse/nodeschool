/**
 * Created by brandon on 11/23/14.
 */

'use strict';
var _ = require('lodash');

module.exports = function(collection) {
    return _.where(collection, {'active':true});
};

