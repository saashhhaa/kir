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
    file_path: getAudio("26/шизоняшка - безмятежность.mp3"),
  },
  {
    id: 2,
    title: "солдаты",
    artist: "4 пореза на птице",
    file_path: getAudio("26/4_Pozicii_Bruno_-_Soldaty_(SkySound7.com) 2.mp3"),
  },
  {
    id: 3,
    title: "стервенею",
    artist: "янка",
    file_path: getAudio("26/ya_sterveneyu.mp3"),
  },
  {
    id: 4,
    title: "i love my boyfriend",
    artist: "princess chelsea",
    file_path: getAudio("26/Princess Chelsea - I Love My Boyfriend.mp3"),
  },
  {
    id: 5,
    title: "звезды на плечах",
    artist: "хадн дадн",
    file_path: getAudio("26/Хадн дадн - Звёзды на плечах.mp3"),
  },
  {
    id: 6,
    title: "the black cap brotherhood theme",
    artist: "tomas dvorak",
    file_path: getAudio(
      "26/Tom_Dvo_k_Machinarium_Soundtrack_2010_The_Black_Brotherhood_Theme.mp3",
    ),
  },
  // collection_child
  {
    id: 7,
    title: "Пожалуйста только не домой",
    artist: "Автоспорт",
    file_path: getAudio(
      "24/collection_child/Автоспорт_–_Пожалуйста,_только_не_домой.mp3",
    ),
  },
  {
    id: 7,
    title: "daddy",
    artist: "кояn",
    file_path: getAudio("24/collection_child/Korn – Daddy.mp3"),
  },
  {
    id: 7,
    title: "falling away from me",
    artist: "кояn",
    file_path: getAudio("24/collection_child/Korn – Falling Away from Me.mp3"),
  },
  {
    id: 7,
    title: "отчим",
    artist: "ksb murzik",
    file_path: getAudio("24/collection_child/KSB muzic – Отчим.mp3"),
  },
  {
    id: 7,
    title: "подворотня мой дом",
    artist: "#юравернись",
    file_path: getAudio(
      "24/collection_child/Valentin Strykalo – Подворотня - мой дом.mp3",
    ),
  },
  // collection_green
  {
    id: 8,
    title: "A Sudden Chaos",
    artist: "Steve Gabry",
    file_path: getAudio("24/collection_green/Steve Gabry – A Sudden Chaos.mp3"),
  },
  {
    id: 8,
    title: "A Dark Place",
    artist: "Steve Gabry",
    file_path: getAudio("24/collection_green/Steve Gabry – A Dark Place.mp3"),
  },
  {
    id: 8,
    title: "Silent Sorrow",
    artist: "Saya no Uta",
    file_path: getAudio(
      "24/collection_green/Saya no Uta – Silent Sorrow.mp3",
    ),
  },
   {
    id: 8,
    title: "Memories",
    artist: "Steve Gabry",
    file_path: getAudio(
      "24/collection_green/Steve Gabry – Memories.mp3",
    ),
  },
  {
    id: 8,
    title: "A Forgotten Ballad",
    artist: "Steve Gabry",
    file_path: getAudio(
      "24/collection_green/Steve Gabry — The Other Side - A Forgotten Ballad.mp3",
    ),
  },
  {
    id: 9,
    title: "Не хватает",
    artist: "оральные хулиганы",
    file_path: getAudio(
      "25/collection_cigarets/оральные хулиганы – Не хватает.m4a",
    ),
  },
  {
    id: 9,
    title: "Біля берегів моря",
    artist: "plaaaato",
    file_path: getAudio(
      "25/collection_cigarets/plaaaato - Topic – Біля берегів моря.m4a",
    ),
  },
   {
    id: 9,
    title: "Глюки",
    artist: "Zlypni",
    file_path: getAudio(
      "25/collection_cigarets/Zlypni – Глюки.m4a",
    ),
  },
    {
    id: 9,
    title: "розмова без слів 2",
    artist: "headachee",
    file_path: getAudio(
      "25/collection_cigarets/headachee – розмова без слів 2.m4a",
    ),
  },
];
