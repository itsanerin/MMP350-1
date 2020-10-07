var hue = document.querySelector('#select-hue');
var hueValue = document.querySelector('#hue-value');

hue.addEventListener('input', function() {
  hueValue.textContent = hue.value;
  document.documentElement.style.setProperty('--master-hue', hue.value);
});