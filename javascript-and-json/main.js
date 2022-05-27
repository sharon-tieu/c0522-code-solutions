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
console.log('an object of the array:', $bookShelf[2]);
console.log('typeof the array of books:', typeof $bookShelf[0]);

var $convertToJSON = $bookShelf;
var $stringify = JSON.stringify($convertToJSON);
console.log('JSON.stringify():', $stringify);
console.log('JSON.stringify() typeof:', typeof $stringify);

var $jsonString = JSON.stringify(['id: 29465', 'name: Sharon']);
console.log('JSON.stringify:', $jsonString);
console.log('typeof JSON.stringify:', typeof $jsonString);

var $jsonParse = JSON.parse('"id: 29465"');
console.log('JSON.parse:', $jsonParse);
console.log('typeof JSON.parse:', $jsonParse);
