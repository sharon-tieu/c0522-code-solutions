var $tabs = document.querySelectorAll('.tab'); // selecting all tab class
var $views = document.querySelectorAll('.view'); // selecting all view class
var $tabContainer = document.querySelector('.tab-container'); // selecting tab-container class

// create a 'click eventListener to '.tab'
// create a function:
//   if event.target .matches() with '.tab'
//   create a for loop to go through each $tabs so:
//     for (var i = 0; i < $tabs.length; i++)
//   IF $tabs at index equals to event.target, then change the class name to 'active'
//   ELSE if $tabs at index does NOT equals to event.target then the class name will NOT update and remain as 'tab'.

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
  }
  var $dataViewValue = event.target.getAttribute('data-view');
  // begin for loop
});
