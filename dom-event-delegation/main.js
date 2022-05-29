// use querySelector to select the '.task-list' class and assign a variable to it.
// var $taskList = document.querySelector('.task-list');
// add a 'click' eventListener and a function:
//   document.addEventListener('click', function(event) {    });
// in the function, log the event.target and event.target.tagName into the console:
//   console.log('event.target:', event.target);
//   console.log('event.target.tagName:', event.target.tagName);
// if event.target !== <button element then return its closest('.task-list-item')
//   if(event.target.tagName !== 'BUTTON') then return $taskList.closest('.task-list-item');
// log .task-list-item element into the console and it should show the parent list item element of the button that a user clicks.
// otherwise, remove that .task-list-item element from the DOM using remove().

var $taskList = document.querySelector('.task-list');
document.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target.tagName !== 'BUTTON') {
    return $taskList.closest('.task-list-item');
  }
  console.log('.task-list-item:', $taskList);
  var $taskList2 = event.target.closest('.task-list-item');
  $taskList2.remove();

});
