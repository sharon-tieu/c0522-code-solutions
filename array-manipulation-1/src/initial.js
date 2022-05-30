/* exported initial */
function initial(array) {
  var exceptTheLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    var element = array[i];
    exceptTheLast.push(element);
  }
  return exceptTheLast;
}

// write a function to return a new array that has all the elements of the array except the last one.
// define and name a function
// assign [] to a new variable since you want to return an array
// write a for-loop , except the condition should include - 1 so it does not include the last element of the array.
// assign array[i] to a new variable.
// push that variable to the empty [].
// return that variable.
