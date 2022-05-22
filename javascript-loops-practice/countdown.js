/* exported countdown */

// Goal: To create an array of numbers that count down (decrements) and push it into an empty array
// define a function with a parameter
// must assigne empty array to a variable
// create a for loop to run through each number
//      Initialization: variable i can start at number. The loop starts here.
//      Condition: Loop runs through condition which is that number has to be >= 0
//      Final expression: decrement because it is counting down
// After the loop runs and the number meets the condition, we can push that number into our new variable.
// After that, the number will be decremented to count down and the loop begins again.
// the array will then be returned from the function until the condition is not met anymore (or when i is not longer >= 0).

function countdown(number) {
  var array = [];
  for (var i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
