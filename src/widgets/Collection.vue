<script setup lang="ts">
import AudioPlayer from "../components/AudioPlayer.vue";
import { collections } from "../data/collections.ts";
import { pictures } from "../data/pictures";
import { audio } from "../data/tracks.ts";
import BackButton from "../shared/BackButton.vue";
import PictureCard from "../shared/PictureCard.vue";
import { useCollectionsStore } from "../stores/colStore.ts";

const collectionsStore = useCollectionsStore();

const filteredPictures = pictures.filter(
  (pic) => pic.collection_id === collectionsStore.openedCollectionId,
);
const currCollection = collections.find(
  (col) => col.id === collectionsStore.openedCollectionId,
);

const trackList = audio.filter((song) =>
  currCollection?.tracks === song.id,
);
</script>

<template>
  <div class="collection">
    <BackButton variant="close_collection" />

    <div class="collection__grid">
      <PictureCard
        v-if="filteredPictures.length !== 0"
        v-for="(pic, index) in filteredPictures"
        :key="index"
        :title="pic.title || ''"
        :img="pic.image_url"
      />
      <p v-else class="feed__oops">૮₍ᵔ⤙ᵔ ₎ა</p>
    </div>
    <div v-if="trackList.length!==0" class="collection__playlist">
      <AudioPlayer
        v-for="track in trackList"
        :src="track.file_path"
        :artist="track.artist"
        :title="track.title"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.collection {
  padding: 5vh 5vw;
  background-color: var(--feed-back);
  min-height: 100vh;
  width: 100%;

  &__grid {
    column-count: 4;
    column-gap: 30px;
    width: 100%;

    grid-template-columns: repeat(4, auto);
  }

  &__oops {
    text-align: center;
    width: 90vw;
    font-size: 2rem;
    margin: 0 auto;
    opacity: 0.3;
    cursor: help;
  }

  &__playlist {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5vw;
    row-gap: 4vh;
    padding: 20px;
    height: 100%;
    border: var(--light-border);
    background-color: black;
  }
}
</style>
