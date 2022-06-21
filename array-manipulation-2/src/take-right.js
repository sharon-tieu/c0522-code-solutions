/* exported takeRight */

// if count is greater than length of the array, return the entire array.
// going through an array backwards: start at the end so intialization is var i = array.length - 1;
// condition: i >= 0; which means when to stop the loop (which is to stop the loop at index 0)
// decrement because we are going backwards in the array

// if count is > than the length of the array, return that original array.

// number of the return value(s) equals to count so newArray.length === count then break out of the loop
function takeRight(array, count) {
  var newArray = [];
  // []
  // ['qux'];
  // ['baz', 'qux'];
  if (count > array.length) {
    return array;
  }
  for (var i = array.length - 1; i >= 0; i--) {
    // i = 4 - 1 // i = 3

    // i = 2 (because i--)
    if (newArray.length === count) {
      // newArray.length = 0 // count = 2;
      // 0 !== 2, so the if statement will not run.Since it is false, else block will run
      // newArray.length = 2 // 2 = 2 // so if block will run, then break and exits the for loop and runs line 39: return.

      // newArray.length = 1 // count = 2;
      break; // means to exit the for loop
    } else {
      newArray.unshift(array[i]);
      // array[i] = array[3] = 'qux'
      // 'qux' adds to the beginning of [];

      // array[i] = array[2] = 'baz'
      // 'baz' is being unshifted to newArray.
    }
  }
  return newArray;
}
