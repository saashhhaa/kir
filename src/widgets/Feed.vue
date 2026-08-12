<script lang="ts" setup>
import { computed } from "vue";
import { getPictures, getPreviewUrl } from "../api/getPictures.ts";
import { PictureCard } from "../shared";
import { useYearsStore } from "../stores/yearsStore.ts";
import HashTagBar from "./HashTagBar.vue";
import { useHashTagsStore } from "../stores/hashtagsStore.ts";
import { ref } from "vue";
import { onMounted } from "vue";
import { type Picture } from "../types/pictureType.ts";
import { EntityPicture } from "../entity/index.ts";
const pictures = ref<Picture[]>([]);
onMounted(async () => {
  pictures.value = await getPictures();
});

const yearsStore = useYearsStore();
const hashTagsStore = useHashTagsStore();

const filteredPictures = computed(() => {
  if (hashTagsStore.currentHashId !== null) {
    return pictures.value.filter(
      (pic) =>
        pic.year === yearsStore.currentYear &&
        pic.hashtag_id === hashTagsStore.currentHashId,
    );
  }

  return pictures.value.filter((pic) => pic.year === yearsStore.currentYear);
});

const selectedIndex = ref<number | null>(null);

const selectedPicture = computed(() =>
  selectedIndex.value !== null ? filteredPictures.value[selectedIndex.value] : null
);

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
</script>

<template>
  <div class="feed">
    <HashTagBar />
    <div class="feed__grid">
      <PictureCard
        v-if="filteredPictures.length !== 0"
        v-for="(pic, index) in filteredPictures"
        :key="index"
        :title="pic.title || ''"
        :img="getPreviewUrl(pic.image_url)"
        :id="pic.id"
         @click="openPicture(index)"
      />
      <p v-else class="feed__oops">૮₍ᵔ⤙ᵔ ₎ა</p>
    </div>
  </div>
  <EntityPicture
    v-if="selectedPicture"
    :title="selectedPicture.title || ''"
    :description="selectedPicture.description ?? ''"
    :img="selectedPicture.image_url"
   
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

  &__oops {
    text-align: center;
    width: 90vw;
    font-size: 2rem;
    margin: 0 auto;
    opacity: 0.3;
    cursor: help;
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
