/* exported compact */
function compact(array) {
  var compactTest = [];
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (item !== false && item !== null && isNaN(item) !== true && item !== 0 && item !== undefined && item !== '') {
      compactTest.push(item);
    }
  }
  return compactTest;
}
