var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
var currentSlide = 0;

let manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
  currentSlide = manual;
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manualNav(i);
  });
});

var repeat = function (activeClass) {
  let repeator = () => {
    setTimeout(function () {
      slides[currentSlide].classList.remove('active');
      btns[currentSlide].classList.remove('active');

      currentSlide++;

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      slides[currentSlide].classList.add('active');
      btns[currentSlide].classList.add('active');

      repeator();
    }, 3500);
  };
  repeator();
};

repeat();
