/* exported todos */

var todos = [];

// .addEventListener() to window object = window.addEventListener()
// window.addEventListener('beforeunload', function(event)) { } because 'beforeunload' is our new event to use. Wants us to write a "callback function" so that means function(event)
// stringify(todos) = new variable named todosJSON
//   todosJSON.stringify(todos);
// store totodsJSON with a key:
//   this.localStorage.setItem('javascript-local-storage, todosJSON);
//                                         key

window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  this.localStorage.setItem('javascript-local-storage', todosJSON);
});

// get the 'javascript-local-storage' from localStorage:
//   localStorage.getItem('javascript-local-storage);
// assign it to a new variable:
//   previousTodosJSON = localStorage.getItem('javascript-local-storage);
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos.parse(previousTodosJSON);
}
