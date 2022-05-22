/* exported includesSeven */

// goal: Create a boolean that indicates whether the number 7 is in the array. Return value must be true or false.
// Create a for loop so each number of the array is evaluated.
//     for (var i = 0; i < array.length; i++);
//     Intiatialization: begin at index zero: var i = 0;
//     Condition: i < length of array so then it stops at the end of the array. i < array.length
//     Final Expression: i++ increments so it can go to the next index of the array
// When it goes through the loop and the condition is met, how will the computer know if the number is 7 ?
//    Create an if statement
//    if (array[i] === 7) then it will return true, from the function.
//    otherwise, return false from the function.

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
