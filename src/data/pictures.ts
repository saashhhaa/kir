import type { Picture } from "../types/pictureType";
import { getImage } from "./assets";

export const pictures: Picture[] = [
  {
    title: "влад",
    image_url: getImage("26/brat1.webp"),
    year: 26,
    hashtag_id: 2,
  },
  {
    title: "влад",
    description: "привет можно я приду к тебе и буду делать вот так",
    image_url: getImage("26/brat2.webp"),
    year: 26,
    hashtag_id: 2,
  },
  {
    title: "бабочка",
    description: "не ночная",
    image_url: getImage("26/butterfly.webp"),
    year: 26,
    hashtag_id: 1,
    track_id: 1, 
  },
  {
    title: "мертвогород",
    image_url: getImage("26/dead_sity.webp"),
    year: 26,
    hashtag_id: 1,
    track_id: 6
  },
  {
    title: "джигит",
    image_url: getImage("26/dzhygit.webp"),
    year: 26,
    hashtag_id: 3,
  },
  {
    title: "ева",
    image_url: getImage("26/eva.webp"),
    year: 26,
    hashtag_id: 1,
    track_id: 5
  },
  {
    title: "кыз",
    image_url: getImage("26/kyz.webp"),
    year: 26,
    hashtag_id: 3,
  },
  {
    title: "дева мария",
    description:
      "снятый с распятия Иисус обычно лежит у мамы на руках, но у меня другое видение, хотя и этот сюжет стоит нарисовать.",
    image_url: getImage("26/madonna.webp"),
    year: 26,
    hashtag_id: 1,
  },
  {
    title: "в спальне",
    image_url: getImage("26/ninel_and_cat.webp"),
    year: 26,
    hashtag_id: 1,
  },
  // НЕУВЕРЕНА
  {
    title: "пикси",
    description: "в детстве из Бархатной золотой жилы которую я не досмотрела",
    image_url: getImage("26/piksi.webp"),
    year: 26,
    // hashtag_id: 3,
  },
  {
    title: "распятие",
    description: "все должны нарисовать распятие",
    image_url: getImage("26/raspyatie.webp"),
    year: 26,
    hashtag_id: 1,
  },
  {
    title: "молчание",
    image_url: getImage("26/silent.webp"),
    year: 26,
    hashtag_id: 1,
  },
  {
    title: "солдаты братских могил",
    image_url: getImage("26/soldiers.webp"),
    year: 26,
    hashtag_id: 1,
    track_id:2
  },
  {
    title: "стервенею",
    description: "янка и лукич",
    image_url: getImage("26/sterveney.webp"),
    year: 26,
    hashtag_id: 1,
    track_id: 3
  },
//   НЕУВЕРЕНА
   {
    title: "помнишь",
    image_url: getImage("26/aibek.webp"),
    year: 26,
    hashtag_id: 1,
    track_id:4
  },
   {
    title: "достоевский",
    image_url: getImage("26/dostoevsky.webp"),
    year: 26,
    hashtag_id: 2,
  },
  {
    image_url: getImage("26/hton1.webp"),
    year: 26,
    hashtag_id: 2,
  },
  {
    image_url: getImage("26/hton2.webp"),
    year: 26,
    hashtag_id: 2,
  },
  //   НЕУВЕРЕНА
   {
    title: "перья",
    image_url: getImage("26/perya.webp"),
    year: 26,
    hashtag_id: 1,
  },
];
