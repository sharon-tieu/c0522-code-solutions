/* exported oddOrEven */

// we want to return an array that will have a string of 'odd' or 'even' after pushing a number
// should use a for loop with an else statement to help the computer make a decision on what to do if the number is odd or even
// write parameters for the computer to decide on whether or not the number is odd or even.
// Those parameters would be numbers[i] % 2 will return 'even', because even numbers have 0 remainders
// otherwise, if the number does not meet that condition, it will return 'odd'
// this should be pushed into our empty array to show 'even' or 'odd'

// Define

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
