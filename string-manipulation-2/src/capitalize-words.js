/* exported capitalizeWords */

// return a string. Means to set an empty string to a variable
// goal: make a function that capitalizes every first word of a sentence
// split string by space or an empty ' ' and assign it var
// loop through each var
// the string becomes an array so at i = 0, it is needs
// access the first index of that array- which is array[i];
// add two strings together: word[0] to be capitalized + and then word.slice(1).toLowerCase() which is the letter at index 1 and after to be lowercased.
// turn the array back into a string which is done with .join(' ');

function capitalizeWords(string) {
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    array[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return array.join(' ');
}
