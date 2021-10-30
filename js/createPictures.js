import { getData } from './api.js';
import { getBigPopup } from './bigPicturesPopup.js';
import { showErrorMessage } from './utils.js';

const picturesWrap = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const usersPhotoListFragment = document.createDocumentFragment();

const thumbnailsRender = (userPhotos) => {
  userPhotos.forEach(({ url, likes, comments }) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    usersPhotoListFragment.appendChild(photoElement);
  });

  picturesWrap.appendChild(usersPhotoListFragment);

  getBigPopup(userPhotos);
};

getData(
  (photos) => {
    thumbnailsRender(photos);
  },
  () => showErrorMessage('Что-то пошло не так. Попробуйте перезагрузить страницу'),
);

export { thumbnailsRender, picturesWrap };

