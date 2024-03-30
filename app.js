var menu = document.querySelector(".menu");
var fullscreen = document.querySelector(".fullscreen");
var css = document.querySelector(".left");
var rightone = document.querySelector(".rightone");
var flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    rightone.style.opacity = 0;
    css.style.opacity = 0;
    fullscreen.style.top = 0;
    flag = 1;
  } else {
    rightone.style.opacity = 1;
    css.style.opacity = 1;
    fullscreen.style.top = "-100%";
    flag = 0;
  }
});
