/* exported dropRight */

// from the example:
// array.length is 4
// 4 - 2 = 2
// remove 2
function dropRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
