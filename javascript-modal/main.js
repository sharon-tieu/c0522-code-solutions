var $button = document.querySelector('#button');
var $modal = document.querySelector('#container');
var $noButton = document.querySelector('#no-button');

$button.addEventListener('click', function (event) {
  $modal.style.display = 'block';
});

$noButton.addEventListener('click', function (event) {
  $modal.style.display = 'none';
});
