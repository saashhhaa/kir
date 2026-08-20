<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { profile } from '../data/profile.ts';
import { tracks } from '../data/tracks.ts';
import AudioPlayer from './AudioPlayer.vue';
import { computed } from 'vue';

const {width} = useWindowSize()
const is_mobile = computed(()=>{
  return width.value<800
})

const emit = defineEmits<{
  openLogin: [];
}>();

function handleImageClick() {
  emit('openLogin');
}
</script>

<template>
    <div class="profile">
        <div
          @click="handleImageClick"
          :style="{ backgroundImage: `url(${profile.IMAGE})` }"
          class="profile__image"
        ></div>
        <div class="profile__content">
          <h1 class="profile__nickname">
            {{ profile.NICKNAME }}
          </h1>

          <p class="profile__description">
            {{ profile.DESCRIPTION }}
          </p>
          <a class="profile__link" href="https://t.me/veiprq8" target="__blank"
            ><img
            class="profile__link-icon"
              src="@/assets/images/profile/telegram.svg"
              alt=""
            />@veiprq8</a
          >
           <a class="profile__link" href="https://t.me/anonimnye_voprosy_tgbot?start=sendQuestion-1023909508" target="__blank"
            ><img
            class="profile__link-icon"
              src="@/assets/images/profile/cute.svg"
              alt=""
            />анонка</a
          >
        </div>
      </div>

      <div class="playlist">
        <AudioPlayer v-if="!is_mobile" v-for="track in tracks" :key="track.src" v-bind="track" />
        <AudioPlayer v-else :artist="tracks[0]?.artist" :src="tracks[0]?.src || ''" :title="tracks[0]?.title || ''"/>
      </div>
</template>

<style scoped lang="scss">
.profile {
  padding: 0;
    width: 100%;
    display: flex;
    padding: 0;
    gap: 30px;
    

  &__nickname {
    font-size: 2rem;
    color: var(--accent-color);
  }

  &__description {
    color: var(--secondary-light-text);
    font-size: .9rem;
    white-space: pre-line;
    margin: 10px 0 30px 0;
  }

  &__link {
    text-decoration:underline;
    display: flex;
    font-size: .9rem;
    align-items: center;
    gap: 5px;
    color: var(--accent-color);
    margin-bottom: 10px;
  }

  &__link-icon {
    width: 15px;
    opacity: .5;
  }

  &__image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    aspect-ratio: 1;
    border: var(--light-border);
        cursor: help;
    width: clamp(100px, 15vw, 400px);

    &:hover {
      filter: brightness(0.7);
    }
  }
}

.playlist {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  height: 100%;
  border: var(--light-border);
  min-width: 30vw;

  &__title {
    padding: 10px;
  }
 
}


@media (max-width: 800px) {
  .playlist {
    width: 100%;
    // max-height: clamp(60px, 13vh, 13vh);
    overflow: hidden;
    margin-bottom: 5vh;

     &__title {
    display: none;
  }
  }
}
</style>