/* exported sumAll */

// goal: Add all the numbers in an array of numbers together to get the total sum.
// Expected outcome: a number
// Create a variable that should be returned from the function. That should be assigned 0
//    var total = 0;
// Create a for loop so we can go through each number of the array
//    for (var i = 0; i < numbers.length; i++)
//    Initialization: start at index 0: var i = 0;
//    Condition: i < length of array of numbers so we can go through that entire array: i < array.length;
//    Final expression: i increments so we can go through each number of the array one by one: i++
// After the loop, the numbers[i] will be added (+) to the total and that is assigned to the new variable that is named total.
// Return total from the function.

function sumAll(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
