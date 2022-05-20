/* exported filterOutNulls */

function filterOutNulls(values) {
  var myBrainHurts = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      myBrainHurts.push(values[i]);
    }
  }
  return myBrainHurts;
}
