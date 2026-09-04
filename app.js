(function () {
  var btn = document.getElementById('license-btn');
  var thanks = document.getElementById('license-thanks');
  if (!btn || !thanks) return;
  btn.addEventListener('click', function () {
    btn.hidden = true;
    thanks.hidden = false;
  });
})();
