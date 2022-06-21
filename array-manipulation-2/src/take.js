/* exported take */

// Must return a new array
// count integer should be the length of the new array and pushed into new Array
// as long as the count = to length of array, then push into new array. once it is !== , then stop pushing.
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.length !== count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// function take(array, count) {
//   var newArray = [];
//   if (count > array.length) {
//     return array;
//   }
//   var i = 0;
//   while (newArray.length < count) {
//     newArray.push(array[i]);
//     i++;
//   }
//   return newArray;
// }
