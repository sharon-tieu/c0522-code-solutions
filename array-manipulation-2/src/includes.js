/* exported includes */

// iterate through the whole array and if array[i] === value, then return true.
// return false if array[i] !== value. Return false should be written outside of the for loop because it will be out of the loop after iterating through the entire array trying to "find the value"
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
