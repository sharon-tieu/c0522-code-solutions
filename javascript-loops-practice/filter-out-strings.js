/* exported filterOutStrings */

// goal: create a new array that contains all the original values EXCEPT the strings: in other words; filter out the strings.
// our return value looks like a new array so we must assign a new variable to an empty array.
// to go through each variable of an old array, we should create a for loop
//     for(var i = 0; i < values.length < i++)
// What happens after the loop? What paramters can we make to help the computer decide whether something is a value or a string?
//     create an if statement.
//     we should set parameters to help the computer differentiate between TYPEOF data:
//        typeof values[i]
//        typeof values[i] !== 'string'  which is the step that is filtering out the strings
// When the conditions are met, then values[i] can be pushed to our new array
//     noStrings.push(values[i])
// then can be returned from the function
//     return noStrings

function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
