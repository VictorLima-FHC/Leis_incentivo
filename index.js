const track = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.project-banner__photo');
const nextBtn = document.querySelector('.slider__btn--next');
const prevBtn = document.querySelector('.slider__btn--prev');

let index = 0;

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});