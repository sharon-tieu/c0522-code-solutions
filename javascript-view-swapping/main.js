var $tabs = document.querySelector('.tab');
// var $views = document.querySelector('.view');
var $tabContainer = document.querySelector('.tab-container');

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
});
