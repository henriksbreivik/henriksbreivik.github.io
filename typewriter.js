(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var elements = document.querySelectorAll('.typed-text');

  elements.forEach(function (el) {
    var fullText = el.textContent;
    if (reduceMotion) return;

    var speed = parseInt(el.getAttribute('data-speed'), 10) || 90;
    el.textContent = '';
    var i = 0;

    (function typeNext() {
      el.textContent = fullText.slice(0, i);
      if (i <= fullText.length) {
        i++;
        setTimeout(typeNext, speed);
      }
    })();
  });
})();
