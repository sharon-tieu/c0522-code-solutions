var button = document.querySelector('#button');
var modal = document.querySelector('#container');
var noButton = document.querySelector('#no-button');

button.addEventListener('click', function (event) {
  modal.classList.remove('invisible');
  modal.classList.add('visible');
});

noButton.addEventListener('click', function (event) {
  modal.classList.add('invisible');
});
