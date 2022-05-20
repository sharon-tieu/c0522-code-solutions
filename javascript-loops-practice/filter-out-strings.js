/* exported filterOutStrings */
function filterOutStrings(values) {
  var beans = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      beans.push(values[i]);
    }
  }
  return beans;
}
