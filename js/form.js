import { isEscape } from './utils.js';

const formUploadImage = document.querySelector('.img-upload__form');
const imageLoad = document.querySelector('.img-upload__overlay');
const modalView = document.querySelector('body');
const buttonModalClose = document.querySelector('.img-upload__cancel');

const hashtags = imageLoad.querySelector('.text__hashtags');
const regExp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const commentField = imageLoad.querySelector('.text__description');
const commentMaxLength = 140;

//слушатель изменения значения поля #upload-file)
formUploadImage.addEventListener('change', () => {
  imageLoad.classList.remove('hidden');
  modalView.classList.add('modal-open');
  formUploadImage.value = ''; //сбрасывает значение поля выбора файла
});

//функция закрытия модального окна
function closeFormPopup() {
  modalView.classList.remove('modal-open');
  imageLoad.classList.add('hidden');
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


//валидация хештегов
//добавить возможность вводить более чем один хештег!!!!
const hashtagsTextInput = () => {
  if (!regExp.test(hashtags.value)) {
    hashtags.setCustomValidity('неверный формат хэштега');
  }
  else {
    hashtags.setCustomValidity('');
  }
  hashtags.reportValidity();
};

hashtags.addEventListener('input', hashtagsTextInput);


//проверка поля ввода комментария
const commentTextInput = () => {
  const valueLength = commentField.value.length;
  if (valueLength > commentMaxLength) {
    commentField.setCustomValidity(`Максимальная длина комментария 140 символов. Удалите лишние ${valueLength - commentMaxLength} симв.`);
  } else {
    commentField.setCustomValidity('');
  }
  commentField.reportValidity();
};

commentField.addEventListener('input', commentTextInput);

export { formUploadImage };


//localhost
