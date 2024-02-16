// Slideshow Images Function
var currentIndex = 0;
var previousIndex = -1;

const slideShow = () => {
  var slides = document.querySelectorAll('.slider');
  if (previousIndex !== -1) {
    slides[previousIndex].classList.remove('show');
  }
  slides[currentIndex].classList.add('show');
  currentIndex++;
  previousIndex++;
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  if (previousIndex > slides.length - 1) {
    previousIndex = 0;
  }
  setTimeout(slideShow, 1000);
};

slideShow();
