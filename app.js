/*

Any string passed to this lib will be parsed, and returned with emojis in UTF-8

*/

var emoji = require('./emoji.js')
var _ = require('lodash')

module.exports = function(string) {

  // throw an error if not passed a string
  if (typeof string !== String) {
    return new Error('Input must be a string!');
  }



};
