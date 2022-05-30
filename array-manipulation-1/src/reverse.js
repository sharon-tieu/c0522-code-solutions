/* exported reverse */
function reverse(array) {
  var reverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    var element = array[i];
    reverse.push(element);
  }
  return reverse;
}

// define and name a function to return a new array that contains all elements in reverse order.
// assign [] to a new variable.
// write a for loop:
//   if you want to reverse the array order, it must be INITIALIZED at the end so the intialization portion of the loop should be written as (var i = array.length -1;)
//   condition: i >=0;  reversing the array- the start is at the end of the array- it stops iterating at the end of the array or when the index is 0
// decrement because we're going backwards: i--
// assign array[i] to a new variable.
// push that new variable into the empty [];
// then return [] which will contain the elements of the array in reverse order.
