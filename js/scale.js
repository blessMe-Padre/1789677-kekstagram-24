const DIVISOR = 100;
const zoomValue = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const scaleControls = document.querySelector('.img-upload__scale');

const scaleControllSmallerButton = scaleControls.querySelector('.scale__control--smaller');
const scaleControllBiggerButton = scaleControls.querySelector('.scale__control--bigger');
const scaleControllValue = scaleControls.querySelector('.scale__control--value');

const scaleValueHidden = scaleControls.querySelector('.scale__value--hidden'); // Скрытое поле значения

const formImage = document.querySelector('.img-upload__form');
const sizeImg = formImage.querySelector('img');


const onScaleSmallerClick = () => {
  let size = parseInt(scaleControllValue.value, 10);
  if (size === zoomValue.MIN) {
    return;
  }
  size -= zoomValue.STEP;
  scaleControllValue.value = `${size}%`;
  sizeImg.style.transform = `scale(${size / DIVISOR})`;
  scaleValueHidden.value = scaleControllValue.value;
};

const onScaleBiggerClick = () => {
  let size = parseInt(scaleControllValue.value, 10);
  if (size === zoomValue.MAX) {
    return;
  }
  size += zoomValue.STEP;
  scaleControllValue.value = `${size}%`;
  sizeImg.style.transform = `scale(${size / DIVISOR})`;
  scaleValueHidden.value = scaleControllValue.value;
};
scaleControllBiggerButton.addEventListener('click', () => {

});

export { scaleControllSmallerButton, scaleControllBiggerButton, scaleControllValue, scaleValueHidden, onScaleSmallerClick, onScaleBiggerClick };
