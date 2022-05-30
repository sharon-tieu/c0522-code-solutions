/* exported compact */
function compact(array) {
  var compactTest = [];
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (item !== false && item !== null && isNaN(item) !== false && item !== 0 && item !== undefined && item !== '') {
      compactTest.push(item);
    }
  }
  return compactTest;
}

// define a function named compact(array);
//    function compact(array) { }
// return value should omit false, null, NaN, 0, undefined, and "" (empty strings) while mainting that order.
// assign an empty [] to a new variable.
// write a for loop to go through each element of the array
//   for(var i = 0; i < array.length; i++);
// array[i] should be assigned a new variable after the loop iterates.
// create an if statement so the computer has paramters to determine what to push into the empty [];
// omit false:  item !== false;
