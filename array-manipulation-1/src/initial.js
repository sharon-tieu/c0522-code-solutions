/* exported initial */
function initial(array) {
  var exceptTheLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    var element = array[i];
    exceptTheLast.push(element);
  }
  return exceptTheLast;
}
