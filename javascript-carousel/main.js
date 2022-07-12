// Global variables
var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');
var circleImage0 = document.querySelector('#circle-image-0');
var circleImage1 = document.querySelector('#circle-image-1');
var circleImage2 = document.querySelector('#circle-image-2');
var circleImage3 = document.querySelector('#circle-image-3');
var circleImage4 = document.querySelector('#circle-image-4');
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

rightArrow.addEventListener('click', function (event) {
  clearInterval(carouselLoop);
  // currentImage = currentImage;
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
  // currentImage = currentImage;
  currentImage--;
  if (currentImage === -1) {
    currentImage = images.length - 1;
  }
  image1.src = images[currentImage];
  var currentDot = document.querySelector('#circle-image-' + currentImage.toString());
  if (currentImage === images.length - 1) {
    var previousDot = document.querySelector('#circle-image-0');
  } else {
    previousDot = document.querySelector('#circle-image-' + (currentImage + 1).toString());
  }
  previousDot.classList.remove('fa-solid');
  currentDot.classList.add('fa-solid');
});

circleImage0.addEventListener('click', function () {
  clearInterval(carouselLoop);
  image1.src = images[0];
  circleImage0.classList.add('fa-solid');
  circleImage1.classList.remove('fa-solid');
  circleImage2.classList.remove('fa-solid');
  circleImage3.classList.remove('fa-solid');
  circleImage4.classList.remove('fa-solid');
});

circleImage1.addEventListener('click', function () {
  clearInterval(carouselLoop);
  image1.src = images[1];
  circleImage0.classList.remove('fa-solid');
  circleImage1.classList.add('fa-solid');
  circleImage2.classList.remove('fa-solid');
  circleImage3.classList.remove('fa-solid');
  circleImage4.classList.remove('fa-solid');
});

circleImage2.addEventListener('click', function () {
  clearInterval(carouselLoop);
  image1.src = images[2];
  circleImage0.classList.remove('fa-solid');
  circleImage1.classList.remove('fa-solid');
  circleImage2.classList.add('fa-solid');
  circleImage3.classList.remove('fa-solid');
  circleImage4.classList.remove('fa-solid');
});

circleImage3.addEventListener('click', function () {
  clearInterval(carouselLoop);
  image1.src = images[3];
  circleImage0.classList.remove('fa-solid');
  circleImage1.classList.remove('fa-solid');
  circleImage2.classList.remove('fa-solid');
  circleImage3.classList.add('fa-solid');
  circleImage4.classList.remove('fa-solid');
});

circleImage4.addEventListener('click', function () {
  clearInterval(carouselLoop);
  image1.src = images[4];
  circleImage0.classList.remove('fa-solid');
  circleImage1.classList.remove('fa-solid');
  circleImage2.classList.remove('fa-solid');
  circleImage3.classList.remove('fa-solid');
  circleImage4.classList.add('fa-solid');
});
