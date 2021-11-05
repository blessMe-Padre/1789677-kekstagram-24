import './../nouislider/nouislider.js';
import './filters.js';
import './scale.js';
import './slider.js';
import './input-validate.js';

import { isEscape } from './utils.js';
import { sendData } from './api.js';
import { fileChooser } from './picture-preview.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { hashtagValidate, commentValidate, hashtags, commentField, imageLoad, onHashtagsTextInput, commentTextInput } from './input-validate.js';
import { scaleControllSmallerButton, scaleControllBiggerButton, scaleControllValue, onScaleSmallerClick, onScaleBiggerClick, scaleValueHidden } from './scale.js';
import { onEffectChange, imgUploadPreview, sliderElementBlock, effectLevelValue } from './slider.js';

const formUploadImage = document.querySelector('.img-upload__form');
const modalView = document.querySelector('body');
const buttonModalClose = document.querySelector('.img-upload__cancel');

//слушатель изменения значения кнопкок scale
const scaleChange = () => {
  scaleControllSmallerButton.addEventListener('click', onScaleSmallerClick);
  scaleControllBiggerButton.addEventListener('click', onScaleBiggerClick);
};

//слушатель изменения значения поля #upload-file)
formUploadImage.addEventListener('change', () => {
  openFormPopup();
});

//функция открытия модального окна
function openFormPopup() {
  imageLoad.classList.remove('hidden');
  modalView.classList.add('modal-open');
  scaleChange();
  hashtagValidate();
  commentValidate();
  onEffectChange(); //не работает?/////////////////////////////////////////
}

//функция закрытия модального окна
function closeFormPopup() {
  modalView.classList.remove('modal-open');
  imageLoad.classList.add('hidden');
  //обработчики событий
  scaleControllSmallerButton.removeEventListener('click', onScaleSmallerClick);
  scaleControllBiggerButton.removeEventListener('click', onScaleBiggerClick);
  hashtags.removeEventListener('input', onHashtagsTextInput);
  commentField.addEventListener('input', commentTextInput);
  //Очистка полей
  fileChooser.value = '';
  scaleValueHidden.value = '100';
  scaleControllValue.value = '100%';
  imgUploadPreview.style.transform = 'scale(1)';
  //фильтры (не работает)//////////////////////////////////////////////////
  sliderElementBlock.classList.add('hidden');
  imgUploadPreview.style.filter = '';
  effectLevelValue.value = '';
  // вводимый текст
  hashtags.value = '';
  commentField.value = '';
}

//закрытие модального окна кнопкой
buttonModalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeFormPopup();
});

//закрытие модального окна по 'esc'
window.addEventListener('keydown', (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closeFormPopup();
  }
  window.removeEventListener('keydown', closeFormPopup);
});

//нажатие на кнопку публикации
const setImgUploadFormSubmit = (onSuccess) => {
  formUploadImage.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => showSuccessMessage('Форма успешно отправлена'),
      () => showErrorMessage('При отправке формы возникла ошибка'),
      () => onSuccess(),
      new FormData(evt.target),
    );
  });
};

setImgUploadFormSubmit(closeFormPopup);

export { formUploadImage, imageLoad };
