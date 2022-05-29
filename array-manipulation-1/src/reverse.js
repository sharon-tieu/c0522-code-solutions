/* exported reverse */
function reverse(array) {
  var reverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    var element = array[i];
    reverse.push(element);
  }
  return reverse;
}

// condition: i >=0;  reversing the array- the start is at the end of the array- it stops iterating at the end of the array or when the index is 0
// decrement because we're going backwards: i--
