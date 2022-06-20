/* exported chunk */
// count = to number of things inside the sub-array
// iterate through array
// each element needs to be given a variable.

function chunk(array, size) {
  var parentArray = [];
  var subArray = [];
  if (size > array.length) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (subArray.length === size) {
      parentArray.push(subArray);
      subArray = []; // the subArray should be reseted after array.length = size to make a new subArray set.
    }
    subArray.push(element);
  }
  parentArray.push(subArray); // pushes the next iteration that didn't get pushed yet
  return parentArray;
}
