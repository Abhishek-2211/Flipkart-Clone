const slides = document.querySelectorAll(".slider");
const btn1 = document.querySelector(".left");
const btn2 = document.querySelector(".right");
let num = 0;

function value(x) {
  num = num + x;
  next(num);
  2;
}
function next(n) {
  if (slides.length == n) {
    n = 0;
    num = 0;
  }
  if (n < 0) {
    n = slides.length + n;
    if (n < 0) {
      n = slides.length - 1;
      num = slides.length - 1;
    }
  }

  for (let y of slides) {
    y.style.display = "none";
  }

  slides[n].style.display = "block";
}
