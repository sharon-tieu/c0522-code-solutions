/* exported sumAll */

// An array of numbers that will all be added together
//
// expected outcome would b
// Initalization:
// Condition:
// Final Expression:
//

function sumAll(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
