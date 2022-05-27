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

// fix from 27 and onward:
// var $studentJSON = '{"id": 29465, "name": "Sharon"}';
// console.log('$studentJSON:', $studentJSON);
// console.log('typeof $studentJSON:', typeof $studentJSON);

// var $studentParse = JSON.parse($studentJSON);
// console.log('JSONparse():', $studentParse);
// console.log('typeOf JSONparse():', typeof $studentParse);
