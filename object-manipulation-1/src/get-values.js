/* exported getValues */
function getValues(object) {
  var objectPropertyValues = [];
  for (const key in object) {
    objectPropertyValues.push(object[key]);
  }
  return objectPropertyValues;
}

// make a function
// assign a variable to an empty [];
// iterating through each key in object = use for in loop
// .push(object[key]) into empty array, because object[key] = values
// return variable that was assigned the empty array
