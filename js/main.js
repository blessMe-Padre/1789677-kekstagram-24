
const getRandomIntFromRange = function (min, max) {
  if (min < 0 || max <= min) {
    getRandomIntFromRange('недопустимое значение');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomIntFromRange();

const getStringLenght = function (max, string) {
  if (string.lenght < max) {
    return true;
  }
  return false;
};
getStringLenght();
