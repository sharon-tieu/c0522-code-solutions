/* exported getStudentNames */

function getStudentNames(students) {
  var person = [];
  for (var i = 0; i < students.length; i++) {
    person.push(students[i].name);
  }
  return person;
}
