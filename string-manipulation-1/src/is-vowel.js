/* exported isVowel */

// return value should be a boolean (true or false)
// write a function that will return true or false when a string is a vowel regardless of it being upper- or lowercased:
// function isVowel(char) { }
// include the string 'aeiouAEIOU' to include all of the vowels that are lower and uppercased.
// .includes() function will return true or false if char matches any of the strings so then write: // return 'aeiouAEIOU'.includes(char)
// ^^ old method

// Set.prototype.has() method returns a boolean to indicate whether an element with the specified value exists in the Set object or not.
// In this case, we will set Set() to 'AEIOU' and 'aeiou' then assign it a new variable for it to be returned.
// function isVowel(char) {
//  var vowels = ['AaEeIiOoUu'];
//  return vowels.includes(char);
// }

function isVowel(char) {
  var vowels = 'AaEeIiOoUu';
  for (var i = 0; i < vowels.length; i++) {
    var vowel = vowels[i];
    if (vowel === char) {
      return true;
    }
  } return false;

}

// return value should be a boolean (true or false);
// write a function
// assign a variable to the string of vowels (including uppercased characters)
// note: array.includes() checks if parameters exist in the array. in this case, it will check if char is inside the array.
// for loop to iterate through vowels
// vowels[i] will be assigned var vowel
// if vowel === char then return true.
