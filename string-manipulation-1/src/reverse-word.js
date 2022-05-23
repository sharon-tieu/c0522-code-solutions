/* exported reverseWord */

function reverseWord(word) {
  var backwards = '';
  for (var i = 0; i < word.length; i++) {
    backwards = word[i] + backwards;
  }
  return backwards;
}
