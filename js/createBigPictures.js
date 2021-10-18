import { randomUserPicture } from './createPictures.js';
// import { generateComments } from './data.js';

function getBigPicture(item) {
  const bigPicture = document.querySelector('.big-picture');
  const createBigPicture = randomUserPicture;
  const bigPictureCancel = document.querySelector('.big-picture__cancel');
  // const createBigPictureComments = generateComments;
  // const bigPictureSocial = document.querySelector('.social__comments');

  createBigPicture.forEach(({ id, url, comments, likes, description }) => {
    if (id === item) {
      bigPicture.classList.remove('hidden');
      bigPicture.querySelector('.big-picture__img').src = url;
      bigPicture.querySelector('.likes-count').textContent = likes;
      bigPicture.querySelector('.comments-count').textContent = comments.length;
      bigPicture.querySelector('.social__caption').textContent = description;
      bigPicture.querySelector('.social__comment-count').classList.add('hidden');
      bigPicture.querySelector('.comments-loader').classList.add('hidden');
      document.body.classList.add('modal-open');
    }
  });

  // createBigPictureComments.forEach(({ avatar, name, message }) => {
  //   bigPictureSocial.querySelector('.social__picture').src = avatar;
  //   bigPictureSocial.querySelector('.social__picture').alt = name;
  //   bigPictureSocial.querySelector('.social__text').textContent = message;
  // });

  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
}

export { getBigPicture };
