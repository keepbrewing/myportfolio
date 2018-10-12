var btn = document.querySelector('i');
var el = document.querySelector('.fade-out');

document.querySelector("section").style.display = "none";

btn.addEventListener('click', function(e){
  el.classList.remove('is-paused');
  document.querySelector("section").style.display = "block";
});