/* exported filterOutNulls */

// goal: to filter out nulls from values and create a new variable that has no nulls and return it from the function.
// assign a new varible to an empty array
//     var noNulls = [];
// create a for loop to go through each varible and see if the condition is met
//     for (var i = 0; i < values.length: i++);
// What can you write after the loop to make the computer recognize is a values is a null?
//     Create an if statement with an assignment operator
//     if (values[i] !== null) ... then push
// if a value[i] is NOT equals to null, then it can be pushed
//      noNulls.push(value[i]);
// noNulls can be returned from the function.

function filterOutNulls(values) {
  var noNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNulls.push(values[i]);
    }
  }
  return noNulls;
}
