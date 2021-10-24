const zoomValue = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const scaleControlls = document.querySelector('.img-upload__scale');

const scaleControllSmallerButton = scaleControlls.querySelector('.scale__control--smaller');
const scaleControllBiggerButton = scaleControlls.querySelector('.scale__control--bigger');
const scaleControllValue = scaleControlls.querySelector('.scale__control--value');

const formImage = document.querySelector('.img-upload__form');
const sizeImg = formImage.querySelector('img');

scaleControllSmallerButton.addEventListener('click', () => {
  let size = parseInt(scaleControllValue.value, 10);
  if (size === zoomValue.MIN) {
    return;
  }
  size -= zoomValue.STEP;
  scaleControllValue.value = `${size}%`;
  sizeImg.style.transform = `scale(${size / 100})`;
});

scaleControllBiggerButton.addEventListener('click', () => {
  let size = parseInt(scaleControllValue.value, 10);
  if (size === zoomValue.MAX) {
    return;
  }
  size += zoomValue.STEP;
  scaleControllValue.value = `${size}%`;
  sizeImg.style.transform = `scale(${size / 100})`;
});

//необходимо записывать значение в скрытое поле для дальнейшей отправки на сервер.
