// goal: to turn a lightbulb on and off with a click. The room starts black w/ a black lightbulb. When we click the black lightbulb, the lightbulb turns yellow and the room turns white.
// When we click the yellow lightbulb, the lightbulb will turn black and the room will also turn black.

// use document.querySelector('.button1'); to select our button element w/ the class '.button1' and assign it a new variable to use
// another document.querySelector('body'); is needed to select our body element and assign it to a new variable.
// must create an EventListener in order to detect if the user clicks.
// if the user clicks, the function boolean will run.
// this variable will have a boolean function.
// we can assign on as true and off as false to differentiate between the two.
// the Boolean value true will be assigned to the classes 'buttonOn' and 'backLightOn' in order to turn "on".
// the Boolean value false will be assigned to the classes 'buttonOff' and 'backLightOff' in order to turn "off".

var lightSwitch = document.querySelector('.button1');
var background = document.querySelector('body');
var switchOn = true;

lightSwitch.addEventListener('click', function boolean(event) {
  if (switchOn === true) {
    lightSwitch.className = 'button1 button-on';
    background.className = 'back-light-on';
    switchOn = false;
  } else {
    lightSwitch.className = 'button1 button-off';
    background.className = 'back-light-off';
    switchOn = true;
  }
}
);
