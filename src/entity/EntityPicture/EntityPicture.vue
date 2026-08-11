<script setup lang="ts">
// import { EntityAudioPlayer } from '../EntityAudioPlayer';
import { ref } from "vue";

interface Props {
  title?: string;
  description?: string;
  img: string;
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
  <div class="picture">
    <div class="picture__content" @click="emit('close')">
      <img
        @click.stop
        src="@/assets/images/picture_profile/hand.svg"
        alt=""
        class="picture__arrow left"
        @click="emit('prev')"
      />
      <div @click.stop class="picture__img-wrapper">
        <h2 v-if="title" class="picture__title">{{ title }}</h2>
        <div class="picture__img-wrapper">
          <img
            @click="toggleZoom"
            :src="img"
            class="picture__img"
            :class="{ zoom: isZoomed }"
            alt=""
          />
        </div>
        <p v-if="description" class="picture__description">{{ description }}</p>
        <!-- <EntityAudioPlayer /> -->
      </div>
      <img
        @click.stop
        src="@/assets/images/picture_profile/hand.svg"
        alt=""
        class="picture__arrow right"
        @click="emit('next')"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.picture {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.842);

  &__content {
    margin: 0 5vw;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__img-wrapper {
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    height: fit-content;
  }

  &__title {
    font-size: 1.5rem;
    color: var(--main-text-inverse);
  }

  &__description {
    color: var(--secondary-light-text);
  }

  &__img {
    width: 100%;
    height: 80vh;
    cursor: zoom-in;

    &.zoom {
      transform: scale(1.4);
      cursor: zoom-out;
      z-index: 100;
    }
  }

  &__arrow {
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
</style>
