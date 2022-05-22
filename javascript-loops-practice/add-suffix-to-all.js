/* exported addSuffixToAll */

// goal: To return a new array that has words with an added suffix at the end of it.
// must assign an empty array to a variable named that we will call ending.
//      var ending = [];
// a for loop should be used to go through each character of words
//      for (var i = 0; i < words.length; i++)
// once the loop finishes, words at index ( word[i] ) with be concatenated with the suffix THEN pushed into the new array variable once the condition is met.
//      ending.push(word[i] + suffix);
// after it is pushed into the new array, it can be returned from the function.
//      return ending

function addSuffixToAll(words, suffix) {
  var ending = [];
  for (var i = 0; i < words.length; i++) {
    ending.push(words[i] + suffix);
  }
  return ending;
}
