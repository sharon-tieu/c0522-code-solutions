/* exported drop */

function drop(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// we want to include all the elements where i > count.
