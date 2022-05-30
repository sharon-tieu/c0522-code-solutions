/* exported getWords */

// goal: to return an array of STRINGS and each string is one of the words in the string parameter. (This means splitting up two words in a string to make separate elements in an array
// the split method can be used inside the splitify function to split string into an array of words.
// the function should ultimately return an array.
// A function is defined named getWords with 1 parameter: string so it should be written as: function getWords(string) {}
// If the string has an empty string ('') such as a space, then it should return an empty array []; thus, separating a string that contains two words.
//    if (string === '') {
//    return [];
//  }
// otherwise, we can split the string using the .split() method. It will look like this: string.split()
// .split(/\W/) means to split by a regular expression for non-alphanumeric characters which includes uppercased and lowercased letters.
// we will return string.split(/\W/);

function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}
