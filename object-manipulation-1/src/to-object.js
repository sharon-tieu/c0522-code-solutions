/* exported toObject */
function toObject(keyValuePair) {
  var object = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  object[key] = value;
  return object;
}

// define a function
// assign a variable to an empty object literal
// key is at index 0 in an array so to access it, it will be key = keyValuePair[0];
// value is at index 1 in an array so to access it, it will be value = keyValuePair[1];
