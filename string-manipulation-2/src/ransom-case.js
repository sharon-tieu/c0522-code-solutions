/* exported ransomCase */

// return a string so assign an empty string to a variable which we will call ransom
// create a for loop to go through the string, starting at 0
// string char at [0] will be lowerCase() and every other will be lowerCase()
// while string starting at char [1] will be upperCase() and every other letter after that will be upperCased().
// could think that every letter at odd index will be upperCased and vice versa.

function ransomCase(string) {
  var ransom = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom += string[i].toLowerCase();
    } else {
      ransom += string[i].toUpperCase();
    }
  }
  return ransom;
}
