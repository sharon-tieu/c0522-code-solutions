// 1 second = 1000 milliseconds
// setTimeout(code function, delay);
setTimeout(myGreeting, 2000);

// write a f(x) for myGreeting.
// select the class="message".
function myGreeting() {
  document.querySelector('.message').textContent = 'Hello There!';
}
