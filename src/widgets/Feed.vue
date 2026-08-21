<script lang="ts" setup>
import { computed } from "vue";
import PictureCard from "../shared/PictureCard.vue";
import { useYearsStore } from "../stores/yearsStore.ts";
import HashTagBar from "../components/HashTagBar.vue";
import { useHashTagsStore } from "../stores/hashtagsStore.ts";
import { ref } from "vue";
import PictureProfile from "../components/PictureProfile.vue";
import { pictures } from "../data/pictures.ts";
import { audio } from "../data/tracks.ts";
import LoadingPictureCard from "../shared/LoadingPictureCard.vue";
import type { Picture } from "../types/pictureType.ts";
import { watch } from "vue";
import CollectionCard from "../shared/CollectionCard.vue";
import { collections } from "../data/collections.ts";
import { useCollectionsStore } from "../stores/colStore.ts";

const yearsStore = useYearsStore();
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

const filteredCollections = computed(() => {
  return collections.filter((col) => col.year === yearsStore.currentYear);
});

const allPicsLoaded = ref(false);
async function preloadImages(images: Picture[]) {
  allPicsLoaded.value = false;

  const promises = images.map(async (pic) => {
    const img = new Image();

    img.src = pic.image_url;

    try {
      await img.decode();
    } catch {}
  });

  await Promise.all(promises);

  allPicsLoaded.value = true;
}

const selectedIndex = ref<number | null>(null);

const selectedPicture = computed(() => {
  if (selectedIndex.value === null) return null;

  return filteredPictures.value[selectedIndex.value];
});

const selectedTrack = computed(() => {
  if (!selectedPicture.value?.track_id) return null;

  return (
    audio.find((track) => track.id === selectedPicture.value?.track_id) ?? null
  );
});

function openPicture(index: number) {
  selectedIndex.value = index;
}

function closePicture() {
  selectedIndex.value = null;
}

function nextPicture() {
  if (selectedIndex.value === null) return;
  const length = filteredPictures.value.length;
  selectedIndex.value = (selectedIndex.value + 1) % length;
}

function prevPicture() {
  if (selectedIndex.value === null) return;
  const length = filteredPictures.value.length;
  selectedIndex.value = (selectedIndex.value - 1 + length) % length;
}

const collectionsStore = useCollectionsStore()

watch(
  filteredPictures,
  (pictures) => {
    preloadImages(pictures);
  },
  { immediate: true },
);
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
    <div v-if="allPicsLoaded" class="feed__grid">
      <PictureCard
        v-if="filteredPictures.length !== 0"
        v-for="(pic, index) in filteredPictures"
        :key="index"
        :title="pic.title || ''"
        :img="pic.image_url"
        @click="openPicture(index)"
      />
      <p v-else class="feed__oops">૮₍ᵔ⤙ᵔ ₎ა</p>
    </div>
    <div v-else class="feed__loading">
      <LoadingPictureCard v-for="_ in 9" />
    </div>
  </div>
  <PictureProfile
    v-if="selectedPicture"
    :title="selectedPicture.title || ''"
    :description="selectedPicture.description ?? ''"
    :img="selectedPicture.image_url"
    :track="selectedTrack"
    @close="closePicture"
    @prev="prevPicture"
    @next="nextPicture"
  />
</template>

<style lang="scss">
.feed {
  padding: 0vh 5vw;
  background-color: var(--feed-back);
  min-height: 100vh;
  width: 100%;

  &__grid {
    column-count: 4;
    column-gap: 30px;
    width: 100%;

    grid-template-columns: repeat(4, auto);
  }

  &__loading {
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    grid-template-rows: repeat(3, 40vh);
    gap: 20px;
  }

  &__oops {
    text-align: center;
    width: 90vw;
    font-size: 2rem;
    margin: 10vh auto 0;
    opacity: 0.3;
    cursor: help;
  }

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

@media (max-width: 1200px) {
  .feed__grid {
    column-count: 3;
  }
}

@media (max-width: 800px) {
  .feed__grid {
    column-count: 2;
  }
}

@media (max-width: 500px) {
  .feed__grid {
    column-count: 1;
  }
}
</style>
