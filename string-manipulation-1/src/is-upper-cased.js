/* exported isUpperCased */

// The goal is to return a true or false value -- a Boolean
// Must loop through each character of a word to evaluate if the character is uppercased or not
// How will the computer know if the character is uppercase?
//  ^ Create an if statement within the loop
// How can we write this if statement to establish the paramters in which the computer can use as a guideline to determine whether the character is uppercased?
//  ^ A comparison operator
// What comparison operator should be used to determine if a word is uppercased?
//  ^ Use a !== (not equals) as a comparison operator because even if one letter is NOT uppercased then the value will be returned false.
// What method can we use with the comparison operator to determine if a character at a certain string is uppercased or not?
//  ^ .toUpperCase() method should be used.
// What are we using that method for?
//  ^ We can use .toUpperCase () for each character of the string so it will be word[i] ;
// With the information determined above, how would we write our 'If' statement?
//  ^ if(word[i] !== word[i].toUpperCase())
// What would be returned?
//  ^ Boolean values: True or False.
//   ^ return false if word[i] does NOT equal .toUpperCase
//    ^ return true if word[i] does equal .toUpperCase

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  } return true;
}
