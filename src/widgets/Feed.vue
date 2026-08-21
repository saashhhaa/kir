<script lang="ts" setup>
import { computed } from "vue";
import { useYearsStore } from "../stores/yearsStore.ts";
import HashTagBar from "../components/HashTagBar.vue";
import CollectionCard from "../shared/CollectionCard.vue";
import { collections } from "../data/collections.ts";
import { useCollectionsStore } from "../stores/colStore.ts";
import PicturesGrid from "../shared/PicturesGrid.vue";
import { useHashTagsStore } from "../stores/hashtagsStore.ts";
import { pictures } from "../data/pictures.ts";

const yearsStore = useYearsStore();

const filteredCollections = computed(() => {
  return collections.filter((col) => col.year === yearsStore.currentYear);
});

const hashTagsStore = useHashTagsStore();

const filteredPictures = computed(() => {
  if (hashTagsStore.currentHashId === null) {
    return pictures.filter(
      (pic) => pic.year === yearsStore.currentYear && !pic.collection_id,
    );
  } else {
    return pictures.filter(
      (pic) =>
        pic.year === yearsStore.currentYear &&
        pic.hashtag_id === hashTagsStore.currentHashId &&
        !pic.collection_id,
    );
  }
});

const collectionsStore = useCollectionsStore()

</script>

<template>
  <div class="feed">
      <HashTagBar />
      <div v-if="filteredCollections.length !== 0" class="feed__container">
        <CollectionCard
          v-for="(col, index) in filteredCollections"
          :title="col.title"
          :key="index"
          @click="collectionsStore.openedCollectionId = col.id"
        />
    </div>
    <PicturesGrid :pictures="filteredPictures"/>
  </div>

</template>

<style lang="scss">
.feed {
  padding: 0vh 5vw;
  background-color: var(--feed-back);
  min-height: 100vh;
  width: 100%;

  &__container {
    width: 100%;
    display: flex;
    gap: 30px;
    padding: 20px 0;
    height: fit-content;
    flex-wrap: wrap;
    margin-bottom: 5vh;
  }

}

</style>
