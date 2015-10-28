/*

Any string passed to this lib will be parsed, and returned with emojis in UTF-8

*/

var emojiArr = require('./emoji.js')
var _ = require('lodash')

module.exports = function(string) {

  // throw an error if not passed a string
  if (typeof string !== "string") {
    return new Error('Input must be a string!');
  }

  var result = [];

  // strip the punctuation
  words = string.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");

  _.forEach(emojiArr, function(emoji) {

    // search the tags
    _.forEach(emoji.tags, function(tag) {

      // split the _ dividers
      partialTags = tag.split("_");
      _.forEach(partialTags, function(partialTag) {
        _.forEach(words, function(word) {
          if (partialTag === word) {
            result += emoji.emoji
          }
        })
      })
    })

    // search the aliases
    _.forEach(emoji.aliases, function(tag) {

      // split the _ dividers
      partialTags = tag.split("_");
      _.forEach(partialTags, function(partialTag) {
        _.forEach(words, function(word) {
          if (partialTag === word) {
            result += emoji.emoji
          }
        })
      })
    })
  })
  _.uniq(result);
  return result;
};
