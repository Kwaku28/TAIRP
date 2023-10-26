const wrapper = document.querySelector('.wrapper');
const images = document.querySelectorAll('#images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let position = 0;
const start = () => {
  position++;
  changeImage();
};

const changeImage = () => {
  if (position > images.length - 1) {
    position = 0;
  } else if (position < 0) {
    position = images.length - 1;
  }

  wrapper.style.transform = `translateX(${-position * 80}vw)`;
};

nextBtn.addEventListener('click', () => {
  position++;
  changeImage();
});

prevBtn.addEventListener('click', () => {
  position--;
  changeImage();
});
