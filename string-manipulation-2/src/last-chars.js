/* exported lastChars */
// return value is a string.
// for loop would begin at the end and go backwards until it reaches i.
// last character is string[i]
// if the length of the result (which is a string) !== to the length, then

function lastChars(length, string) {
  var result = '';
  for (var i = string.length - 1; i >= 0; i--) {
    // i = 16 - 1 = 15
    // i-- // i = 14
    const lastChars = string[i];
    // string[15] = 'y'
    // string[14] = 'a'
    if (result.length !== length) {
      // result.length = 0 // length = 8 // 0 !== 8 so run if code block
      // result.length = 1 // length = 8 // 1 !== 8 so the if block will run
      result = lastChars + result;
      // result = y + ' ' = 'y'
      // result = lastChars + 'y' // result = 'a' + 'y' // result = 'ay'
    }
  }
  return result;
}
