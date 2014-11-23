/**
 * Created by brandon on 11/23/14.
 */

var _ = require('lodash');
var moment = require('moment');

module.exports = function(todos) {

    var todoTpl = "<ul>\n    <% _.forEach(todo, function(t) { %>\n    <li><%= t %>\n      <ul>\n        <% _.forEach(t, function(jobs) {\n      </ul>\n    </li>\n</ul>\n    ";



    return _.template(todoTpl,);
};