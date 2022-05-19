var first = 1;
var second = 3;
var third = 9;
var maximumValue = Math.max(first, second, third);
console.log('maximumValue:', maximumValue);

var heroes = ['Izuku Midoriya', 'Monkey D. Luffy', 'Kakashi Hatake', 'Satoru Gojo', 'Eren Yaeger'];
var randomNumber = Math.random(heroes);
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'J.K Rowling'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'Narnia',
    author: 'C.S. Lewis'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js =
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens'
  };

var css =
  {
    title: 'Sense and Sensibility',
    author: 'Jane Austen'
  };

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Sharon' + ' ' + 'Tieu';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
