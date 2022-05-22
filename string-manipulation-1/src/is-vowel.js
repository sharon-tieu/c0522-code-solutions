/* exported isVowel */

// goal: Must return a true or false value- Boolean.
// Boolean is to indicate whether or not char is a vowel AND either lower or uppercased.
// write a for loop so then we can go through each index of an array
// if statement should be included to say:
//   ^ IF statement should be a vowel 'aeiou'
//

function isVowel(char) {
  for(var i = 0; i < char.length; i++) {
    if(char[i] = 'a' or char[i] = 'e' or char[i] = 'i' or char[i] = 'o' or char[i] = 'u') {
      return true;
    }
    return false;
  }
