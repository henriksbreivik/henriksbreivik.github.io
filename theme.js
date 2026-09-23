(function () {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  var button = toggle.querySelector('.theme-toggle-btn');
  var buttonIcon = button.querySelector('.theme-icon');
  var buttonLabel = button.querySelector('.theme-toggle-label');
  var menu = toggle.querySelector('.theme-menu');
  var options = Array.prototype.slice.call(toggle.querySelectorAll('[role="option"]'));

  var STATES = ['standard', 'light', 'dark'];

  function getState() {
    var stored = localStorage.getItem('theme');
    return STATES.indexOf(stored) !== -1 ? stored : 'standard';
  }

  function applyState(state) {
    if (state === 'standard') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', state);
    }

    options.forEach(function (option) {
      var isSelected = option.getAttribute('data-theme') === state;
      option.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      if (isSelected) {
        buttonIcon.innerHTML = option.querySelector('.theme-icon').innerHTML;
        buttonLabel.textContent = option.getAttribute('data-label');
      }
    });
  }

  function openMenu() {
    menu.hidden = false;
    button.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.hidden = true;
    button.setAttribute('aria-expanded', 'false');
  }

  button.addEventListener('click', function () {
    if (menu.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  options.forEach(function (option) {
    option.addEventListener('click', function () {
      var state = option.getAttribute('data-theme');
      localStorage.setItem('theme', state);
      applyState(state);
      closeMenu();
      button.focus();
    });
  });

  document.addEventListener('click', function (event) {
    if (!toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  applyState(getState());
})();
