var student = {
  firstName: 'Sharon',
  lastName: 'Tieu',
  age: 25
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of student.livesInIrvine:', student.livesInIrvine);

student.previousOccupation = 'Respiratory Therapist';
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Lexus',
  model: 'rc350f',
  year: '2016'
};
vehicle['color'] = 'White';
vehicle['isConvertible'] = true;

console.log('value of vehicle[color]:', vehicle['color']);
console.log('value of vehicle[isConvertible]:', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Scratch',
  type: 'Cat'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
