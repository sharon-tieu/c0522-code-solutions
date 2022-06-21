/* exported capitalizeWord */
// establish a variable for an empty string
// when given a word, we should go through each character (for loop)
// we want the output to capitalize only at the first character- which is at index 0
// everything else after index 0 will be lowercased.
// uppercased character will be added to the rest of the characters.
// for 'javascript' use || assignment operator that says at index 4 (where the 'S' is located), uppercase it, but first convert 'javascript' to be all lowercased.

function capitalizeWord(word) {
  var uppercase = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0 || (i === 4 && word.toLowerCase() === 'javascript')) {
      uppercase += word[i].toUpperCase();
    } else {
      uppercase += word[i].toLowerCase();
    }
  }
  return uppercase;
}
