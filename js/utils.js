const getRandomInt = (from, to) => {
  const lower = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upper = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isEscape = (evt) => evt.key === 'Escape';

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

export { getRandomInt, isEscape, getRandomArrayElement };
