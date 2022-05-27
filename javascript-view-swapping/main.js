var $tabs = document.querySelector('.tab');
// var $views = document.querySelector('.view');
var $tabContainer = document.querySelector('.tab-container');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      $tabs[i].className = 'tab active';
      if (event.target === $tabs[i]);
    }
  } else {
    $tabs[i].className = 'tab';
  }
});
