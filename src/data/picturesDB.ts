import image1 from '/images/feed/24/зимняя ночь.png'
import image2 from '/images/feed/24/зимняя ночь.png'

// TODO: усовершенствовать логику айдишников
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const id_rand = getRandomInt(1, 100000);

export const pictures = [
  {
    // TODO: оптимизация отношения картинки и года
    year: 26,
    id: id_rand,
    title: "няdddsdsdssds sdsdsd sd няdddsdsdssds sdsdsd sd",
    img: image2,
  },
   {
    year: 24,
    id: id_rand,
    title: "зимняя ночь",
    img: image1,
  },
];
