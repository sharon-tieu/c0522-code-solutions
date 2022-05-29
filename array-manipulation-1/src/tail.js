/* exported tail */
function tail(array) {
  var afterFirst = [];
  for (var i = 1; i < array.length; i++) {
    var element = array[i];
    afterFirst.push(element);
  }
  return afterFirst;
}
