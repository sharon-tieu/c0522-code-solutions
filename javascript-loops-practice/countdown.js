/* exported countdown */

// Goal: To create an array of numbers that count down (decrements) and push it into an empty array
// define a function with a parameter
// must assigne empty array to a variable
// create a for loop
// Initialization: variable i can start at number. The loop starts here.
// condition: Loop runs through condition which is that number has to be >= 0
// final expression: decrement because it is counting down
// when each 'brake' of the loop runs through, it will push that number into the array which is shown though the .push() method
// the array will then be returned from the function until the condition is not met anymore (or when i is not longer >= 0).

function countdown(number) {
  var array = [];
  for (var i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
