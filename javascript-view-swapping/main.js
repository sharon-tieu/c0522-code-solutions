var $tabContainer = document.querySelector('.tab-container'); // selects '.tab-container'

// var $views = document.querySelectorAll('.view'); // selects ALL '.view' elements

// #4.ii step:
// Make a loop to go through all of the '.tab' elements (which we assigned as $tab)
// Compare $tab (all of the '.tab' elements) to the event.target.
// The elements that are === event.target should have their className updated to '.active'

var $tabs = document.querySelectorAll('.tab'); // selects ALL '.tab' elements.

// use an Event Listener to 'click' attaches an event handler to '.tab-container'
// that will check to see if event.target matches() '.tab'
// if it does match, then LOOP through the NodeList of '.tab' elements and compare each of them to the event.target
// elements that does match '.tab' should have their .className be updated to '.active'
// if they do NOT match '.tab' then it should not be updated to '.active'

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs.className = 'tab active';
      }
    }
  } else {
    $tabs.className = 'tab';
  }
});
