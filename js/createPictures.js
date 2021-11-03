import { getData } from './api.js';
import { getBigPopup } from './bigPicturesPopup.js';
import { showErrorMessage } from './utils.js';
import { debounce } from './utils/debounce.js';
import { showSortBlock, sortDefaultClick, sortRandomClick, sortDiscussedClick, sortInput, comparePicturesIds, comparePicturesComments } from './filters.js';

const RERENDER_DELAY = 500; // Задержка перерисовки изображений
const MAX_RANDOM_PICTURES = 10; //10 случайных, не повторяющихся фотографий.

const picturesWrap = document.querySelector('.pictures');
const usersPhotoListFragment = document.createDocumentFragment();

//Удаляет весь массив картинок
const resetArray = () => {
  Array.from(picturesWrap.children).forEach((item) => {
    if (item.classList.contains('picture')) {
      item.remove();
    }
  });
};

// Фрагмент содержимого шаблона картинок
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const thumbnailsRandomRender = (userPhotos) => {
  userPhotos
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, MAX_RANDOM_PICTURES)
    .forEach(({ url, likes, comments }) => {
      const photoElement = pictureTemplate.cloneNode(true);
      photoElement.querySelector('.picture__img').src = url;
      photoElement.querySelector('.picture__likes').textContent = likes;
      photoElement.querySelector('.picture__comments').textContent = comments.length;
      usersPhotoListFragment.appendChild(photoElement);
    });
  resetArray();
  picturesWrap.appendChild(usersPhotoListFragment);
  getBigPopup(userPhotos);
};

// Отрисовка фотографий
const thumbnailsRender = (userPhotos) => {
  userPhotos.slice();

  if (sortInput.value === 'default') {
    userPhotos.sort(comparePicturesIds);
  } else if (sortInput.value === 'random') {
    thumbnailsRandomRender();
  } else if (sortInput.value === 'discussed') {
    userPhotos.sort(comparePicturesComments);
  }

  userPhotos.forEach(({ url, likes, comments }) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    usersPhotoListFragment.appendChild(photoElement);
  });

  resetArray();
  picturesWrap.appendChild(usersPhotoListFragment);
  getBigPopup(userPhotos);
};


// Загрузка фотографий
getData(
  (photos) => {
    thumbnailsRender(photos);
    showSortBlock(); //если загрузка миниатюр прошла успешна, убирает скрывающий класс.

    sortDefaultClick(debounce(
      () => thumbnailsRender(photos),
      RERENDER_DELAY,
    ));

    sortRandomClick(debounce(
      () => thumbnailsRandomRender(photos),
      RERENDER_DELAY,
    ));

    sortDiscussedClick(debounce(
      () => thumbnailsRender(photos),
      RERENDER_DELAY,
    ));

  },
  () => showErrorMessage('Что-то пошло не так. Попробуйте перезагрузить страницу'),
);

export { thumbnailsRender, picturesWrap };

