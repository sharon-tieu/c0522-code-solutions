/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var ending = [];
  for (var i = 0; i < words.length; i++) {
    ending.push(words[i] + suffix);
  }
  return ending;
}
