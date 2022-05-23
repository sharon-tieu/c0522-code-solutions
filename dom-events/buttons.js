function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var buttonClick = document.querySelector('.click-button');
buttonClick.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var mouseEvent = document.querySelector('.hover-button');
mouseEvent.addEventListener('mousemove', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
var doubleButtonClick = document.querySelector('.double-click-button');
doubleButtonClick.addEventListener('dblclick', handleDoubleClick);
