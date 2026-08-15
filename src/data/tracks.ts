import type { Track } from "../types/trackType";
import { getAudio } from "./assets";
import audio_1 from "../assets/audio/Порез На Собаке - Теперь Мы Снова Вдвоём.mp3";

export const tracks = [
  {
    src: audio_1,
    title: "теперь мы снова вдвоем",
    artist: "порез на собаке",
  },
  {
    src: audio_1,
    title: "теперь мы снова вдвоем",
    artist: "порез на собаке",
  },
  {
    src: audio_1,
    title: "теперь мы снова вдвоем",
    artist: "порез на собаке",
  },
];

export const audio: Track[] = [
  {
    id: 1,
    title: "безмятежность",
    artist: "шизоняшка",
    file_path:  getAudio('26/шизоняшка - безмятежность.mp3'),
  },
  {
    id: 2,
    title: "солдаты",
    artist: "4 пореза на птице",
    file_path: getAudio('26/4_Pozicii_Bruno_-_Soldaty_(SkySound7.com) 2.mp3'),
  },
  {
    id: 3,
    title: "стервенею",
    artist: "янка",
    file_path: getAudio('26/ya_sterveneyu.mp3'),
  },
  {
    id: 4,
    title: "i love my boyfriend",
    artist: "princess chelsea",
    file_path: getAudio('26/Princess Chelsea - I Love My Boyfriend.mp3'),
  },
  {
    id: 5,
    title: "звезды на плечах",
    artist: "хадн дадн",
    file_path: getAudio('26/Хадн дадн - Звёзды на плечах.mp3'),
  },
   {
    id: 6,
    title: "the black cap brotherhood theme",
    artist: "tomas dvorak",
    file_path: getAudio('26/Tom_Dvo_k_Machinarium_Soundtrack_2010_The_Black_Brotherhood_Theme.mp3'),
  },
];

// C:\Users\HomePC\Desktop\kir\public\audio\26\
// C:\Users\HomePC\Desktop\kir\public\audio\26\
// C:\Users\HomePC\Desktop\kir\public\audio\26\
// C:\Users\HomePC\Desktop\kir\public\audio\26\