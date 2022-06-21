/* exported numVowels */

// give an ' ' a variable
// write for loop to go through each string
// write if statement for 'aeiouAEIOU' to detect vowels after looping
// .includes() checks if certain characters are inside the string[i];
// add number to numberOfVowels when there is a vowel- so increment
// return numberofvowels

function numVowels(string) {
  var numberOfVowels = 0;
  for (var i = 0; i < string.length; i++) {
    if ('aeiouAEIOU'.includes(string[i])) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}
