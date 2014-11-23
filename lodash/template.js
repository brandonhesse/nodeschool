/**
 * Created by brandon on 11/23/14.
 */

var _ = require('lodash');

module.exports = function(login) {

    return _.template('Hello <%= name %> (logins: <%= logins %>)',
        {
            name: login.name,
            logins: _.size(login.login)
        });
};