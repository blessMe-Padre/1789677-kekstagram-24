
const getRandomIntFromRange = (min, max) => {
  if (min < 0 || max <= min) {
    getRandomIntFromRange('недопустимое значение');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// const getStringLength = (max, string) => string.length < max;
// getStringLength();


//id, число — идентификатор описания
const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const randomId = getRandomIntFromRange(0, id.length - 1);

//получаем url, строка — адрес картинки
const getUrl = `photos/${randomId}.jpg`;

//description, строка — описание фотографи
const description = [
  'описание номер 1',
  'описание номер 2',
  'описание номер 3',
  'описание номер 4',
  'описание номер 5'];
const getRandomDescription = getRandomIntFromRange(0, description.length - 1);

//likes, число — количество лайков
const likes = getRandomIntFromRange(15, 200);


//comments— список комментариев, оставленных другими пользователями к этой фотографии.

//идентификатор комментария
const randomCommentsId = getRandomIntFromRange(1, 999);

//avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg
const randomAvatarNumber = getRandomIntFromRange(1, 6);
const avatar = `img/avatar-${randomAvatarNumber}.svg'`;

//текста комментария — message
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !',
];
const getRandomMessage = getRandomIntFromRange(0, message.length - 1);

const names = [
  'Расул',
  'Муххидин',
  'Нурали',
  'Махаббат',
  'Бекзат',
  'Насиба',
  'Улукбек',
  'Ухтам',
];
const getRandomNames = getRandomIntFromRange(0, names.length - 1);

const greateComments = () => ({
  id: randomCommentsId,
  avatar: avatar,
  message: message[getRandomMessage],
  name: names[getRandomNames],
});

const greatePhotoDescription = () => ({
  id: randomId,
  url: getUrl,
  description: description[getRandomDescription],
  likes: likes,
  comments: greateComments(),
});


// eslint-disable-next-line no-unused-vars
const similarPhotoDescription = Array.from({ length: 25 }, greatePhotoDescription);

