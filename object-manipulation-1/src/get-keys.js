/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

// write a function that will return an Array of object's property keys.
// assign an empty [] to a variable.
// for a for in loop to loop through objects
// push key into empty []
// return keys
