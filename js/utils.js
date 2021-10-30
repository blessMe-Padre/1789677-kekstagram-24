const ALERT_SHOW_TIME = 10000;

const getRandomInt = (from, to) => {
  const lower = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upper = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isEscape = (evt) => evt.key === 'Escape';

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '50%';
  alertContainer.style.top = '40%';
  alertContainer.style.bottom = 0;
  alertContainer.style.right = 0;
  alertContainer.style.transform = 'translate(-50%, -50%)';
  alertContainer.style.height = '30%';
  alertContainer.style.borderRadius = '10px';
  alertContainer.style.display = 'flex';
  alertContainer.style.justifyContent = 'center';
  alertContainer.style.alignItems = 'center';
  alertContainer.style.padding = '50px 50px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.lineHeight = 1.2;
  alertContainer.style.backgroundColor = '#FF5F49';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomInt, isEscape, getRandomArrayElement, showAlert };
