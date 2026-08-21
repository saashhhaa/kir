<script setup lang="ts">
import { pictures } from "../data/pictures";
import BackButton from "../shared/BackButton.vue";
import PictureCard from "../shared/PictureCard.vue";
import { useCollectionsStore } from "../stores/colStore.ts";

const collectionsStore = useCollectionsStore()

const filteredPictures = pictures.filter(
  (pic) => pic.collection_id === collectionsStore.openedCollectionId,
);


</script>

<template>
  <div class="collection">
    <BackButton variant="close_collection"/>
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
}
</style>
