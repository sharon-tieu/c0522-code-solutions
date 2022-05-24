var count = 0;
var buttonIsHot = document.querySelector('.hot-button');

buttonIsHot.addEventListener('click', function increment(event) {
  count++;
  document.querySelector('.click-count').textContent = ('Clicks: ' + count);
  if (count < 4) {
    buttonIsHot.className = 'hot-button cold';
  } else if (count < 7) {
    buttonIsHot.className = 'hot-button cool';
  } else if (count < 10) {
    buttonIsHot.className = 'hot-button tepid';
  } else if (count < 13) {
    buttonIsHot.className = 'hot-button warm';
  } else if (count < 16) {
    buttonIsHot.className = 'hot-button hot';
  } else {
    buttonIsHot.className = 'hot-button nuclear';
  }
}
);
