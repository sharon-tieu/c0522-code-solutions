/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  var firstChar = array[firstIndex];
  var secondChar = array[secondIndex];
  for (var i = 0; i < array.length; i++) {
    if (i === firstIndex) {
      array[i] = secondChar;
    } else if (i === secondIndex) {
      array[i] = firstChar;
    }
  }
  return array.join('');
}
