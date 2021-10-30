
const getData = (onSuccess, onError) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error('Не удалось загрузить фотографии. Попробуйте перезагрузить страницу');
    })
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = (onSuccess, onFail, onFinally, body) => {
  fetch(
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onSuccess();
    })
    .finally(() => {
      onFinally();
    });
};

export { getData, sendData };
