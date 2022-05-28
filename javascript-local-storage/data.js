/* exported todos */

var todos = [];
var preTodosJSON = localStorage.getItem('javascript-local-storage');
// .addEventListener() to window object = window.addEventListener()
// window.addEventListener('beforeunload', function(event)) { }
// stringify(todos) = new variable named todosJSON

if (preTodosJSON !== null) {
  todos = JSON.parse(preTodosJSON);
}

window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  this.localStorage.setItem('javascript-local-storage', todosJSON);
});
