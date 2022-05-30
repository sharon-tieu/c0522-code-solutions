/* exported reverseWord */

// return value should be a string of the WORD in reverse order
// this means that an empty string should be assigned to a new variable. We'll call this backwards. This will look like: var backwards = '';
// create a for loop so this will run over and over again: for (var i = 0; i < words.length; i++) {}
// word[i] should be added to backwards and equals to backwards. This will be the word at i = 0 being concatenated with an empty string. So then backwards will now be that letter at index 0 and empty string.
// Then when it loops again at index 1, the backwards will change to letter at index 0 and empty string
// for example: using "word". indexes are 'w' is at index 0, 'o' is at index 1, 'r' is at index 2, 'd' is at index 3. and var backwards = '';
// backwards = word[i] + backwards so that will look like word[1] is 'w' + '' = backwards
// backwards is now: backwards = 'w'
// backwards = word[1] + backwards will look like o + w;
// backwards is now: backwards = 'ow';
// once the loop goes through each letter, then it can be returned from the function.

function reverseWord(word) {
  var backwards = '';
  for (var i = 0; i < word.length; i++) {
    backwards = word[i] + backwards;
  }
  return backwards;
}
