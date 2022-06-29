// setInterval(f(x), delay);
// clearInterval(timeId);

// write a setInterval(function) to countdown from 4 every 1 second. This should look like:
// setInterval(function(), 1000);
// in the f(x) { , the counter should countdown from 4 so it should decrement
// must change text content: so use document.querySelector('.countdown-display')
// if counter === 3, then change the text content to '3'
// if counter === 2, then change the text content to '2'
// if counter === 1, then change the text content to '1'
// if the counter === 0, then clearInterval() so the countdown can stop.
// change the h1 class to your new message.

var countFrom = 4;

var blastOff = setInterval(function () {
  // console.log(counter);
  countFrom--;
  document.querySelector('.countdown-display').textContent = countFrom;
  if (countFrom === 0) {
    clearInterval(blastOff);
    document.querySelector('.countdown-display').textContent = '~~Earth Beeeelooowww Us~';
  }
}, 1000);
