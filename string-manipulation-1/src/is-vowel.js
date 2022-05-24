/* exported isVowel */

// return value should be a boolean (true or false)
// write a function that will return true or false when a string is a vowel regardless of it being upper- or lowercased:
// function isVowel(char) { }
// include the string 'aeiouAEIOU' to include all of the vowels that are lower and uppercased.
// .includes() function will return true or false if char matches any of the strings so then write: // return 'aeiouAEIOU'.includes(char)
// ^^ old method

// Set.prototype.has() method returns a boolean to indicate whether an element with the specified value exists in the Set object or not.
// In this case, we will set Set() to 'AEIOU' and 'aeiou' then assign it a new variable for it to be returned.
function isVowel(char) {
  var vowels = new Set('AaEeIiOoUu');
  return vowels.has(char);
}
