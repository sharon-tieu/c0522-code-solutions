// Global variables
var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');
var circleImage1 = document.querySelector('#circle-image-1');
var circleImage2 = document.querySelector('#circle-image-2');
var circleImage3 = document.querySelector('#circle-image-3');
var circleImage4 = document.querySelector('#circle-image-4');
var circleImage5 = document.querySelector('#circle-image-5');

// 'click' eventListeners:
leftArrow.addEventListener('click', function (event) {
  console.log('left arrow click detected!');
});

rightArrow.addEventListener('click', function (event) {
  console.log('right arrow click detected!');
});

circleImage1.addEventListener('click', function () {
  console.log('circle 1 click detected!');
});

circleImage2.addEventListener('click', function () {
  console.log('circle 2 click detected!');
});

circleImage3.addEventListener('click', function () {
  console.log('circle 3 click detected!');
});

circleImage4.addEventListener('click', function () {
  console.log('circle 4 click detected!');
});

circleImage5.addEventListener('click', function () {
  console.log('circle 5 click detected!');
});

// TIMER

// view-swapping
