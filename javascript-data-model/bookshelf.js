var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log(bookshelf[1].author + ' wrote ' + '"' + bookshelf[1].title + ',"' + ' which covers syntax and parameters central to JSON objects definitions.');
console.log(bookshelf[0].isbn + ' is the isbn of a book called "Introduction to JavaScript Object Notation" by L. Bassett.');
console.log('The book named, ' + '"' + bookshelf[2].title + ',"' + ' discusses the theory of designing and building APIs in any language or framework to help curious readers understand and learn more about the world of API development.');
