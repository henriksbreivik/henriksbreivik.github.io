(function () {
  var el = document.getElementById('age');
  if (!el) return;

  var birthDate = new Date(2001, 9, 13); // 13. oktober 2001
  var today = new Date();

  var age = today.getFullYear() - birthDate.getFullYear();
  var hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  el.textContent = age;
})();
