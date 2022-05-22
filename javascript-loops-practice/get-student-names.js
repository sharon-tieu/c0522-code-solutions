/* exported getStudentNames */

// goal: create an array that has only the object (name) of each i
// An empty array should be assigned to a new variable.
//     var person = [];
// for loop should be created so we can run through each object;
//     for (var i = 0; i < students.length; i++);
//     Initialization: Start at index 0 (the beginning of the array)
//     Condition: i must be less than the length of the array so we can go through the entire array
//     Final expression: i++ because we are incrementing up the index of the array
// After the loop and the conditions are met, the object of the variable students at that index can be pushed into our new array variable.
//     person.push(object[i].name);
// Once everything is met, the new empty array variable named person can be returned from the function.
//     return person;

function getStudentNames(students) {
  var person = [];
  for (var i = 0; i < students.length; i++) {
    person.push(students[i].name);
  }
  return person;
}
