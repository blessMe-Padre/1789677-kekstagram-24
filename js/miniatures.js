import { greateDescription } from './data.js';

//Контейнер для изображений от других пользователей
const photoPicturesList = document.querySelector('.pictures');

//Шаблон изображения случайного пользователя
const randomUserTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const randomUserPicture = greateDescription();
const userListFragment = document.createDocumentFragment();

randomUserPicture.forEach(({ url, likes, comments }) => {
  const photoElement = randomUserTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  userListFragment.appendChild(photoElement);
});

photoPicturesList.appendChild(userListFragment);
