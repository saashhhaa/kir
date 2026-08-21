<script lang="ts" setup>
import { computed } from "vue";
import PictureCard from "../shared/PictureCard.vue";
import { ref } from "vue";
import PictureProfile from "../components/PictureProfile.vue";
import { audio } from "../data/tracks.ts";
import LoadingPictureCard from "../shared/LoadingPictureCard.vue";
import type { Picture } from "../types/pictureType.ts";
import { watch } from "vue";

interface Props {
    pictures:  Picture[],
}

const props = defineProps<Props>()

const allPicsLoaded = ref(false);
async function preloadImages(images: Picture[]) {
  allPicsLoaded.value = false;

  const promises = images.map(async (pic) => {
    const img = new Image();

    img.src = pic.image_url ;

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

  return props.pictures[selectedIndex.value];
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
  const length = props.pictures.length;
  selectedIndex.value = (selectedIndex.value + 1) % length;
}

function prevPicture() {
  if (selectedIndex.value === null) return;
  const length = props.pictures.length;
  selectedIndex.value = (selectedIndex.value - 1 + length) % length;
}

watch(
  () => props.pictures,
  async (pictures) => {
    await preloadImages(pictures);
  },
  { immediate: true }
);
</script>

<template>
  <div v-if="allPicsLoaded" class="grid">
    <PictureCard
      v-if="props.pictures.length !== 0"
      v-for="(pic, index) in props.pictures"
      :key="index"
      :title="pic.title || ''"
      :img="pic.image_url"
      @click="openPicture(index)"
    />
    <p v-else class="grid__oops">૮₍ᵔ⤙ᵔ ₎ა</p>
  </div>
  <div v-else class="grid__loading">
    <LoadingPictureCard v-for="_ in 9" />
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
.grid {
  column-count: 4;
  column-gap: 30px;
  width: 100%;

  grid-template-columns: repeat(4, auto);

  &__loading {
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    grid-template-rows: repeat(3, 40vh);
    gap: 20px;
    margin-bottom: 2vh;
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
  .grid {
    column-count: 3;
  }
}

@media (max-width: 800px) {
  .grid {
    column-count: 2;

    &__loading {
    grid-template-columns: repeat(2, 1fr);
  }
  }
}

@media (max-width: 500px) {
  .grid {
    column-count: 1;
  }
}
</style>
