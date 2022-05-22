/* exported getLastChar */

// Goal: Define a function that will return the last character of a string.
// utiltize charAt method because we need to get a character at a certain index
// .length - 1 will get the last character, because .length is one more than the entire index.
// you

function getLastChar(string) {
  return string.charAt(string.length - 1);
}
