<script setup lang="ts">
import AudioPlayer from "../components/AudioPlayer.vue";
import { collections } from "../data/collections.ts";
import { pictures } from "../data/pictures";
import { audio } from "../data/tracks.ts";
import PicturesGrid from "../shared/PicturesGrid.vue";
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

    <PicturesGrid :pictures="filteredPictures"/>
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

@media (max-width: 1000px) {
 .collection {
   &__playlist {
    grid-template-columns: repeat(1, 1fr);
  }

 }
}
</style>
