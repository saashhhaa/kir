import image1 from '/images/feed/24/зимняя ночь.png'
import image2 from '/images/feed/26/брат2.png'
import image3 from '/images/feed/26/распятие.png'
import image4 from '/images/feed/26/венера милосская.png'
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
    title: "набросок влада",
    img: image2,
    hashtag: 'скетч'
  },
   {
    year: 24,
    id: id_rand,
    title: "зимняя ночь",
    img: image1,
    hashtag: 'полноценка'

  },
  {
    year: 26,
    id: id_rand,
    title: "распятие",
    img: image3,
    hashtag: 'полноценка'

  },
    {
    year: 26,
    id: id_rand,
    title: "ева",
    img: image4,
    hashtag: 'полноценка'
  },
];
