/* exported getIndexes */

// goal: to return a new array that contains the indexes from the input array.
// a new array should be the return value so assign an empty array to a new variable.
//     var index = [];
// Create a for loop to run through the array
//     for (var i = 0; i < array.length; i++);
//     Initialization: index begins at 0
//     Condition: i is less than the length of the array, so it goes through the entire array
//     Once conditions are met, the loop increments to go to the next index found in the array
// After the condition is met, i can be pushed into the new array
//     index.push(i);
// Then it can be returned from the function:
//     return index.

function getIndexes(array) {
  var index = [];
  for (var i = 0; i < array.length; i++) {
    index.push(i);
  }
  return index;
}
