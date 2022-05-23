/* exported capitalize */

// we want to return the original word, but with its first character uppercased while the rest of its characters lowercased.
// define a function named capitalize with parameter: word.
// name a variable and assign it to make the uppercase the first character of a string.
// to do that, we need to access the first character of the string by using the uppercase method at word at index 0 (first letter is at index 0)
// write a for loop to go through each of the characters of the string STARTING at the SECOND character of the string at index 1: for (var i = 1; i < word.length; i++ ) { }
// once each character of the string is looped, the string at index 0 should be capitalized and should be concatenated with the rest of the characters starting at the index 1
// use += operator
// word at index should all be lowercased
// return variable from the function

function capitalize(word) {
  var capitalizedWord = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    capitalizedWord += word[i].toLowerCase();
  }
  return capitalizedWord;
}
