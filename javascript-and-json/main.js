// create an Array with 3 objects literals that represent books:
//   var $bookShelf = [{ isbn: '', title: '', author: ''}, { isbn: '', title:'', author: ''}];
// log the array of books and console.log the typeof
//   console.log(typeof books);
// var stringify = JSON.stringify($bookShelf);

var $bookShelf = [
  {
    isbn: '978-0439023481',
    title: 'The Hunger Games',
    author: 'Suzanne Collins'
  },
  {
    isbn: '860-1419988143',
    title: 'The Maze Runner',
    author: 'James Dashner'
  },
  {
    isbn: '978-0786838653',
    title: 'Percy Jackson & the Olympians: The Lightning Thief',
    author: 'Rick Riordan'
  }
];
console.log('array:', $bookShelf);
console.log('an object of the array:', $bookShelf);
console.log('typeof the array of books:', typeof $bookShelf);

var $stringify = JSON.stringify($bookShelf);

console.log('JSON.stringify():', $stringify);
console.log('JSON.stringify() typeof:', typeof $stringify);

// create a string in JSON format that holds data to represent a student which includes:
//   number id and string name
// string: '{ }'
// should include: id: 29465m name: sharon
//    "id": 29465, "name": "sharon"
// altogether should be...
//   '{"id": 29465, "name": "Sharon"};
// then console.log the variable
var $studentJSON = '{"id": 29465, "name": "Sharon"}';
console.log('$studentJSON:', $studentJSON);
console.log('typeof $studentJSON:', typeof $studentJSON);

// use JSONparse() to create a JavaScript object from our JavaScript String ($studentJSON). Then console.log() it.
// JSON.parse($studentJSON) will be assigned to var $studentParse

var $studentParse = JSON.parse($studentJSON);
console.log('studentparse():', $studentParse);
console.log('typeOf studentparse():', typeof $studentParse);
