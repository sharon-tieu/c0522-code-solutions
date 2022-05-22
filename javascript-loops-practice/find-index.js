/* exported findIndex */

// the value that we must get is to return

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  } return -1;
}
