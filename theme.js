(function () {
  var select = document.getElementById('theme-toggle');
  if (!select) return;

  var STATES = ['standard', 'light', 'dark', '90s'];

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
    select.value = state;
  }

  select.addEventListener('change', function () {
    var state = STATES.indexOf(select.value) !== -1 ? select.value : 'standard';
    localStorage.setItem('theme', state);
    applyState(state);
  });

  applyState(getState());
})();
