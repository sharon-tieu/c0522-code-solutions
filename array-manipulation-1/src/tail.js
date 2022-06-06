/* exported tail */
function tail(array) {
  var afterFirst = [];
  for (var i = 1; i < array.length; i++) {
    var element = array[i];
    afterFirst.push(element);
  }
  return afterFirst;
}

// write a function to return a new array that has all the elements of array after the first.
// assign [] to a new variable.
// use a for-loop to go through each element of the array but initialize at 1 to skip the first element of the array.
// then assign array[i] to a new variable.
// push that new var to the empty [].
// then return.
