/* exported oddOrEven */

// goal: return a new array of strings that indicate whether the corresponding number is 'odd' or 'even'
// Assign an empty array to a new variable. We will call that variable isItOddOrEven
//    var isItOddOrEven = [];
// Create a for loop so we can run through each index of the array.
//    for (var i = 0; i < numbers.length; i++);
//    Intialization: start at index zero;
//    Condition: i is less than the length of the array called numbers.
//    Final expression: when the condition is met, then i increments so we can evaluate the next step of the array
// After the loop, the modulus of numbers[i] should be === 0, because an even number has a remainder of zero.
//    if (var[i] % 2 === 0);
//    Then this should return 'even' from the function
// Else statement should be included after to indicate that if it is not met, then it should return 'odd' from the function
//    } else { isItOddOrEven.push('odd'); }

function oddOrEven(numbers) {
  var isItOddOrEven = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      isItOddOrEven.push('even');
    } else {
      isItOddOrEven.push('odd');
    }
  } return isItOddOrEven;
}
