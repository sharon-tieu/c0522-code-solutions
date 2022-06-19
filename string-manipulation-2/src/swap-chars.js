/* exported swapChars */

// the firstIndex and secondIndex should be switched
// string must be split at empty string
// must find firstIndex and secondIndex when looping through the string
// when i === firstIndex, then that array[i] will be the secondChar
// when i === secondIndex, then that array[i] will be the firstChar
// then return the array and join ''

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
