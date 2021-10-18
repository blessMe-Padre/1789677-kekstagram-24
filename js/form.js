const formUploadImage = document.querySelector('.img-upload__form');
const imageLoad = document.querySelector('.img-upload__overlay');
const modalView = document.querySelector('body');
const buttonModalClose = document.querySelector('.img-upload__cancel');
const hashtags = imageLoad.querySelector('.text__hashtags');
const commentField = imageLoad.querySelector('.text__description');


//слушатель изменения значения поля #upload-file)
formUploadImage.addEventListener('change', () => {
  imageLoad.classList.remove('hidden');
  modalView.classList.add('modal-open');
  formUploadImage.value = ''; //сбрасывает значение поля выбора файла
});

//закрытие модального окна кнопкой
buttonModalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalView.classList.remove('modal-open');
  imageLoad.classList.add('hidden');
});

//закрытие модального окна по 'esc'
window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalView.classList.remove('modal-open');
    imageLoad.classList.add('hidden');
  }
});

//валидация хештегов
//добавить возможность вводить более чем один хештег!!!!
const regExp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

hashtags.addEventListener('input', () => {
  if (!regExp.test(hashtags.value)) {
    hashtags.setCustomValidity('неправильный формат хэштега');
  }
  else {
    hashtags.setCustomValidity('');
  }
  hashtags.reportValidity();
});


//проверка поля ввода комментария

const commentMaxSize = 140;

commentField.addEventListener('input', () => {
  if (commentField.length > commentMaxSize) {
    commentField.setCustomValidity('максимальная длинна коментария 140 символов');
  } else {
    commentField.setCustomValidity('');
  }
  commentField.reportValidity();
});

export { formUploadImage };
