import { DIVISOR } from './constants.js';

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const specialElement = document.querySelector('#effect-chrome');
const imgUploadPreview = document.querySelector('.img-upload__preview');


effectLevelValue.value = 20;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 50,
  step: 10,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  effectLevelValue.value = unencoded[handle];
  imgUploadPreview.style.filter = `grayscale(${effectLevelValue.value / DIVISOR}`;
});

specialElement.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    imgUploadPreview.classList.add('effects__preview--chrome');

  } else {
    imgUploadPreview.classList.remove('effects__preview--chrome');
    imgUploadPreview.style.filter = 'none';
  }
});
