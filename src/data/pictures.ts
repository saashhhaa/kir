import type { Picture } from "../types/pictureType";
import { getImage } from "./assets";

export const pictures: Picture[] = [
  //collection_birds
  {
    title: "китоглав №1",
    image_url: getImage("27/collection_birds/китоглав1.png"),
    collection_id: 5,
  },
  {
    title: "китоглав №2",
    image_url: getImage("27/collection_birds/китоглав2.png"),
    collection_id: 5,
  },
  {
    title: "глухарь",
    image_url: getImage("27/collection_birds/глухарь.png"),
    collection_id: 5,
  },
  {
    title: "ворона",
    image_url: getImage("27/collection_birds/ворона.png"),
    collection_id: 5,
  },
  {
    title: "сова, голубь, киви",
    image_url: getImage("27/collection_birds/сова_голубь_киви.png"),
    collection_id: 5,
  },
  {
    title: "сорока, клест, воробей",
    image_url: getImage("27/collection_birds/сорока_клест_воробей.png"),
    collection_id: 5,
  },
  //collection_child
  {
    title: "стул, штаны, ремень",
    image_url: getImage("24/collection_child/стул, штаны, ремень.png"),
    collection_id: 3,
  },
  {
    title: "не надо",
    image_url: getImage("24/collection_child/не надо, пожалуйста.png"),
    collection_id: 3,
  },
  {
    title: "тюрьма",
    image_url: getImage("24/collection_child/тюрьма.png"),
    collection_id: 3,
  },
  {
    title: "так он станет добрее?",
    image_url: getImage("24/collection_child/так он станет добрым.png"),
    collection_id: 3,
  },
  {
    title: "почему же ты не помог",
    image_url: getImage("24/collection_child/почему же ты не помог.png"),
    collection_id: 3,
  },
  {
    title: "я грязная",
    image_url: getImage("24/collection_child/я грязная.png"),
    collection_id: 3,
  },
  {
    title: "маршрут",
    image_url: getImage("24/collection_child/маршрут.png"),
    collection_id: 3,
  },
  {
    title: "больно",
    image_url: getImage("24/collection_child/больно.png"),
    collection_id: 3,
  },
  //collection_green
  {
    title: "не двинуться",
    image_url: getImage("24/collection_green/сложно подвинуться.png"),
    collection_id: 2,
  },
  {
    title: "почему мне",
    image_url: getImage("24/collection_green/почему я.png"),
    collection_id: 2,
  },
  {
    title: "нарцисс",
    image_url: getImage("24/collection_green/нарцисс.png"),
    collection_id: 2,
  },
  {
    title: "не лезет",
    image_url: getImage("24/collection_green/через край.png"),
    collection_id: 2,
  },
  {
    title: "смотрят",
    image_url: getImage("24/collection_green/наблюдают.png"),
    collection_id: 2,
  },
  //collection_sheep
  {
    title: "акцент",
    image_url: getImage("24/collection_sheeps/sheep1.png"),
    collection_id: 4,
  },
  {
    title: "нюанс",
    image_url: getImage("24/collection_sheeps/sheep2.png"),
    collection_id: 4,
  },
  {
    title: "динамика",
    image_url: getImage("24/collection_sheeps/sheep3.png"),
    collection_id: 4,
  },
  {
    title: "контраст",
    image_url: getImage("24/collection_sheeps/sheep4.png"),
    collection_id: 4,
  },
  //collection_cigarets
  {
    title: "#1",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/1.png"),
    collection_id: 1,
  },
  {
    title: "#2",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/2.png"),
    collection_id: 1,
  },
  {
    title: "#1",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/бесконечность1.png"),
    collection_id: 1,
  },
  {
    title: "#3",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/помада3.png"),
    collection_id: 1,
  },
  {
    title: "#4",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/пепельница4.png"),
    collection_id: 1,
  },
  {
    title: "#5",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/руки5.png"),
    collection_id: 1,
  },
  {
    title: "#6",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/конфорка6.png"),
    collection_id: 1,
  },
  {
    title: "#7",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/всевсигаретах7.png"),
    collection_id: 1,
  },
  {
    title: "#8",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/вместе8.png"),
    collection_id: 1,
  },
  {
    title: "#9",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/заболевания9.png"),
    collection_id: 1,
  },
  {
    title: "#10",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/рутина10.png"),
    collection_id: 1,
  },
  {
    title: "#11",
    description: "===°~",
    image_url: getImage("25/collection_cigarets/тепло11.png"),
    collection_id: 1,
  },
  // OTHERS :
  {
    title: "осень №1",
    image_url: getImage("27/осень.png"),
    year: 27,
    hashtag_id: 1,
  },
  {
    title: "осень №2",
    image_url: getImage("27/осень2.png"),
    year: 27,
    hashtag_id: 1,
  },
  {
    title: "лесовички",
    image_url: getImage("27/детки.png"),
    year: 27,
    hashtag_id: 2,
  },
  {
    title: "cc №1",
    image_url: getImage("26/cc.png"),
    year: 26,
    hashtag_id: 2,
  },
  {
    title: "cc №2",
    image_url: getImage("26/cc2.png"),
    year: 26,
    hashtag_id: 2,
  },
  {
    image_url: getImage("24/redSketch.png"),
    year: 24,
    hashtag_id: 2,
  },
  {
    image_url: getImage("24/redSketch2.png"),
    year: 24,
    hashtag_id: 2,
  },
  {
    title: "gloomy sunday",
    image_url: getImage("24/gloomy_sunday.png"),
    year: 24,
    hashtag_id: 1,
    track_id: 15,
  },
  {
    image_url: getImage("24/скетч_руки.png"),
    year: 24,
    hashtag_id: 2,
  },
  {
    title: "Всем отчего-то кажется, что я — лох ",
    description: 'А если вдруг окажется, что я — бог?',
    image_url: getImage("24/голобородько_толик.png"),
    year: 24,
    hashtag_id: 1,
    track_id: 21,
  },
  {
    title: "поможешь бабуле?",
    image_url: getImage("24/бабуля.png"),
    year: 24,
    hashtag_id: 1,
    track_id: 18,
  },
  {
    title: "курение вредит вашему здоровью",
    image_url: getImage("24/курение_вредит.png"),
    year: 24,
    hashtag_id: 2,
  },
  {
    title: "soir noir",
    description: 'soir bleu',
    image_url: getImage("24/soir_noir.png"),
    year: 24,
    hashtag_id: 1,
  },
  {
    image_url: getImage("24/скетч.png"),
    year: 24,
    hashtag_id: 2,
  },
  {
    image_url: getImage("24/путешествие.png"),
    year: 24,
    hashtag_id: 1,
    track_id: 19,
  },
  {
    image_url: getImage("24/лева.png"),
    year: 24,
    hashtag_id: 1,
    track_id: 17,
  },
  {
    title: 'Happy Halloween',
    image_url: getImage("24/хэллоуин.png"),
    year: 24,
    hashtag_id: 1,
    track_id: 16,
  },
  {
    image_url: getImage("24/горилаз_скетч.jpg"),
    year: 24,
    hashtag_id: 2,
  },

  {
    title: 'теперь лишь человек',
    image_url: getImage("24/бинты.png"),
    year: 24,
    hashtag_id: 1,
    track_id: 20,
  },
  {
    image_url: getImage("24/скетч2.jpg"),
    year: 24,
    hashtag_id: 2,
  },
  {
    image_url: getImage("24/птицу_емъ.png"),
    year: 24,
    hashtag_id: 2,
  },
  {
    image_url: getImage("24/sketchField.png"),
    year: 24,
    hashtag_id: 2,
  },
  {
    title: "happy halloween",
    image_url: getImage("25/котИТыква.png"),
    year: 25,
    hashtag_id: 2,
  },
  {
    title: "набросок нинель №1",
    image_url: getImage("25/нинель1.png"),
    year: 25,
    hashtag_id: 2,
  },
  {
    title: "набросок нинель №2",
    image_url: getImage("25/нинель2.png"),
    year: 25,
    hashtag_id: 2,
  },
  {
    title: "рендал",
    description: "пеперони",
    image_url: getImage("25/рендал.png"),
    year: 25,
    hashtag_id: 2,
  },
  {
    title: "гостиная",
    image_url: getImage("25/рыба.png"),
    year: 25,
    hashtag_id: 1,
    track_id:10,
  },
  {
    title: "вот бы справить мне костюм себе из...",
    description: "сталина",
    image_url: getImage("25/сталин.png"),
    year: 25,
    hashtag_id: 1,
    track_id: 14
  },
  {
    title: "yume",
    image_url: getImage("25/yume.png"),
    year: 25,
    hashtag_id: 2,
  },

  {
    title: "болезненный",
    description: "я",
    image_url: getImage("25/flue.png"),
    year: 25,
    hashtag_id: 1,
  },
  {
    title: "свобода",
    description: "я",
    image_url: getImage("25/freedom.png"),
    year: 25,
    hashtag_id: 1,
    track_id:13
  },
  {
    title: "зефир",
    image_url: getImage("25/the_fear.png"),
    year: 25,
    hashtag_id: [1, 2],  // ДВОЙНОЙ ХЭШТЕГ
  },
  {
    image_url: getImage("25/woman.png"),
    year: 25,
    hashtag_id: 1,
  },
  {
    title: "влад приденьгах №2",
    image_url: getImage("25/xarekter1.png"),
    year: 25,
    hashtag_id: [1, 3], // ДВОЙНОЙ ХЭШТЕГ
    track_id: 11,
  },
  {
    title: "влад приденьгах №1",
    image_url: getImage("25/xarakter2.png"),
    year: 25,
    hashtag_id: [1, 3], // ДВОЙНОЙ ХЭШТЕГ
    track_id: 12, 
  },
  {
    image_url: getImage("26/коты_раскраска2.jpg"),
    year: 26,
    hashtag_id: 2,
  },
  {
    image_url: getImage("26/коты_раскраска.jpg"),
    year: 26,
    hashtag_id: 2,
  },
  {
    image_url: getImage("26/коты_скетч_кучка.jpg"),
    year: 26,
    hashtag_id: 2,
  },
  {
    image_url: getImage("26/скетч_курить палочками.jpg"),
    year: 26,
    hashtag_id: 2,
  },
  {
    image_url: getImage("26/скетч_укурыш.jpg"),
    year: 26,
    hashtag_id: 2,
  },
  {
    image_url: getImage("26/скетч_ноги_иисуса.jpg"),
    year: 26,
    hashtag_id: 2,
  },
  {
    image_url: getImage("26/стадик_ноги.jpg"),
    year: 26,
    hashtag_id: 3,
  },
  {
    image_url: getImage("26/стадик_торс.jpg"),
    year: 26,
    hashtag_id: 3,
  },
  {
    image_url: getImage("26/скетч_монах.jpg"),
    year: 26,
    hashtag_id:[ 3,2],
  },
  {
    image_url: getImage("26/скетч_женщины.jpg"),
    year: 26,
    hashtag_id: [2,3],
  },
  {
    image_url: getImage("26/скетч_шахматы.jpg"),
    year: 26,
    hashtag_id: [1, 2],
  },
  {
    description: "пирокинезис?",
    image_url: getImage("25/курящий.png"),
    year: 25,
    hashtag_id: 1,
  },
  {
    title: "инфант №1",
    image_url: getImage("27/infant1.JPG"),
    year: 27,
    hashtag_id: 2,
  },
  {
    title: "инфант №2",
    image_url: getImage("27/infant2.JPG"),
    year: 27,
    hashtag_id: 2,
  },
  {
    image_url: getImage("27/скетч_ноги.png"),
    year: 27,
    hashtag_id: 2,
  },
  {
    title: "салли 🦷 кромсали",
    description:
      "Поздравляю сали сосали с 10и летием. Мне же в этом году исполняется 20.",
    image_url: getImage("27/сф.png"),
    year: 27,
    hashtag_id: 1,
  },
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
    track_id: 6,
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
    track_id: 5,
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
    track_id: 2,
  },
  {
    title: "стервенею",
    description: "янка и лукич",
    image_url: getImage("26/sterveney.webp"),
    year: 26,
    hashtag_id: 1,
    track_id: 3,
  },
  //   НЕУВЕРЕНА
  {
    title: "помнишь",
    image_url: getImage("26/aibek.webp"),
    year: 26,
    hashtag_id: 1,
    track_id: 4,
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
