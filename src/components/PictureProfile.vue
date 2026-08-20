<script setup lang="ts">
import EntityAudioPlayer from "./AudioPlayer.vue";
import { ref } from "vue";
import type { Track } from "../types/trackType.ts";

interface Props {
  title?: string;
  description?: string;
  img: string;
  track?: Track | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  close: [];
  prev: [];
  next: [];
}>();

const isZoomed = ref(false);

function toggleZoom() {
  isZoomed.value = !isZoomed.value;
}
</script>

<template>
  <div class="picture" :class="{ 'picture--zoomed': isZoomed }">
    <div class="picture__content" @click="emit('close')">
      <img
        :class="{ hidden: isZoomed }"
        @click.stop
        src="@/assets/images/hand.svg"
        alt=""
        class="picture__arrow left"
        @click="emit('prev')"
      />
      <div @click.stop class="picture__img-wrapper">
        <h2 v-if="title" class="picture__title" :class="{ hidden: isZoomed }" >{{ title }}</h2>
        <img
          @click="toggleZoom"
          :src="img"
          class="picture__img"
          :class="{ zoom: isZoomed }"
          alt=""
        />
        <p v-if="description" class="picture__description" :class="{ hidden: isZoomed }">{{ description }}</p>
        <EntityAudioPlayer
          :class="{ hidden: isZoomed }"
          v-if="track"
          :src="track.file_path"
          :title="track.title"
          :artist="track.artist"
        />
      </div>
      <img
        :class="{ hidden: isZoomed }"
        @click.stop
        src="@/assets/images/hand.svg"
        alt=""
        class="picture__arrow right"
        @click="emit('next')"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.hidden {
  opacity: 0;
}
.picture {
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.842);
  overflow: hidden;

  &--zoomed {
    backdrop-filter: blur(20px);
  }

  &__content {
    margin: 0 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  &__img-wrapper {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    position: relative;

    max-width: 80vw;

    max-height: 90vh;
  }

  &__title {
    font-size: 1rem;
    color: var(--main-text-inverse);
  }

  &__description {
    width: 60%;
    color: var(--secondary-light-text);
    font-size: 0.9rem;
  }

  &__img {
    display: block;
    z-index: 1000;
    max-width: 75vw;
    max-height: 75vh;

    width: auto;
    height: auto;

    object-fit: contain;

    cursor: zoom-in;

    transition: transform 0.25s ease;
    transform-origin: center center;

    &.zoom {
      transform: scale(1.3);
      cursor: zoom-out;
      backdrop-filter: blur(20px);
      position: absolute;
    }
  }

  &__arrow {
    flex-shrink: 0;
    cursor: pointer;
    width: 30px;

    &.left {
      transform: rotate(-90deg);
    }

    &.right {
      transform: rotate(90deg);
    }
  }
}

@media (max-width: 600px) {
  .picture {
    &__content {
      margin: 0 15px;
    }

    &__img-wrapper {
      max-width: calc(100vw - 100px);
      max-height: 85vh;
    }

    &__img {
      max-width: calc(100vw - 100px);
      max-height: 70vh;

      &.zoom {
        transform: scale(1.35);
      }
    }

    &__arrow {
      width: 22px;
    }

    &__title {
      font-size: 1.1rem;
      &.hidden {
        opacity: 0;
      }
    }

    &__description {
      font-size: 0.85rem;
      &.hidden {
        opacity: 0;
      }
    }
  }
}
</style>
