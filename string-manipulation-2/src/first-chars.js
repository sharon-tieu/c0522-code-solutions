/* exported firstChars */

// return string
// if we call a length that's bigger than the length of our word, then return the entire string.
// the length of the string should be less than the actual length
// add and reassign string[i] using += operator
// return from the function

function firstChars(length, string) {
  var character = '';
  if (length > string.length) {
    return string;
  }
  for (var i = 0; character.length < length; i++) {
    character += string[i];
  }
  return character;
}
