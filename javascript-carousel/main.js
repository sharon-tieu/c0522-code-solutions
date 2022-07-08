// Global variables
var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');
var circleImage1 = document.querySelector('#circle-image-0');
var circleImage2 = document.querySelector('#circle-image-1');
var circleImage3 = document.querySelector('#circle-image-2');
var circleImage4 = document.querySelector('#circle-image-3');
var circleImage5 = document.querySelector('#circle-image-4');
var image1 = document.querySelector('#image1');
var images = ['./images/001.png', './images/004.png', './images/007.png', './images/025.png', './images/039.png'];
var currentImage = 0;

// To make images change, use setInterval (function () { })
// Set all images we want in a carousel in an array [] to access them easily by index.
// set currentImage to 0 so we have a reference point to what the "beginning" is

// In setInterval, we write a function to change the image every second.
// select <img> tag element, because we want to change its src value.
// only want to change value of <img> src class attribute;
// increment to the next index.
// once setInterval loop reaches end of the array, then restart to i = 0;
var carouselLoop = setInterval(function () {
  var currentDot = document.querySelector('#circle-image-' + currentImage.toString());
  if (currentImage === 0) {
    var previousDot = document.querySelector('#circle-image-' + (images.length - 1).toString());
  } else {
    previousDot = document.querySelector('#circle-image-' + (currentImage - 1).toString());
  }
  currentDot.classList.add('fa-solid');
  previousDot.classList.remove('fa-solid');
  image1.src = images[currentImage];
  currentImage++;
  if (currentImage === images.length) {
    currentImage = 0;
  }
}, 1000);

// 'click' eventListeners:

// when user clicks an arrow, the carousel loop stops.
// the image will continue to change accordingly to their index at whatever point the setInterval loop stopped at and will continue to change with each click.
// this goes for pokemon images and dot images
// to change images and dot, change the src
rightArrow.addEventListener('click', function (event) {
  clearInterval(carouselLoop);
  currentImage = currentImage;
  image1.src = images[currentImage];
  var currentDot = document.querySelector('#circle-image-' + currentImage.toString());
  if (currentImage === 0) {
    var previousDot = document.querySelector('#circle-image-' + (images.length - 1).toString());
  } else {
    previousDot = document.querySelector('#circle-image-' + (currentImage - 1).toString());
  }
  previousDot.classList.remove('fa-solid');
  currentDot.classList.add('fa-solid');
  currentImage++;
  if (currentImage === images.length) {
    currentImage = 0;
  }
});

leftArrow.addEventListener('click', function (event) {
  clearInterval(carouselLoop);
  currentImage = currentImage - 1;
  image1.src = images[currentImage - 1];
  var currentDot = document.querySelector('#circle-image-' + (currentImage - 1).toString());
  // if (currentImage === images.length - 1) {
  //   var previousDot = document.querySelector('#circle-image-0');
  // } else {
  //   previousDot = document.querySelector('#cicle-image-' + (currentImage - 1).toString());
  // }
  currentDot.classList.add('fa-solid');
  // previousDot.classList.remove('fa-solid');
  currentImage--;
  if (currentImage === -1) {
    currentImage = images.length - 1;
  }
});

circleImage1.addEventListener('click', function () {
  console.log('circle 1 click detected!');
  var circleZero = querySelector('#circle-imaage-0');
  circleZero.classList.add('fa-solid');
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

// Make a DOMContentLoaded f(x) because we want a function to run to loop the carousel.
document.addEventListener('DOMContentLoaded', function () {
  carouselLoop();
});
