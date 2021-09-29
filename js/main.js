
const getRandomIntFromRange = (min, max) => {
  if (min < 0 || max <= min) {
    getRandomIntFromRange('недопустимое значение');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomIntFromRange();

const getStringLength = (max, string) => string.length < max;
getStringLength();
