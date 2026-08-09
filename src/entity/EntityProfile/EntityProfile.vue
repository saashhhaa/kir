<script setup lang="ts">
import { profile } from '../../data/profile';
import { tracks } from '../../data/tracks';
import { useAdminStore } from '../../stores/admin';
import { EntityAudioPlayer } from '../EntityAudioPlayer';

const admin = useAdminStore();

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
        </div>
      </div>

      <div :class="{'goDown': admin.isAdminLogged }" class="playlist">
        <EntityAudioPlayer v-for="track in tracks" :key="track.src" v-bind="track" />
      </div>
</template>

<style scoped lang="scss">
.profile {
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
  gap: 10px;
  height: 100%;
  border: var(--light-border);
  min-width: 30vw;

  &.goDown {
    margin-top: 7vh;
  }
}


@media (max-width: 800px) {
  .playlist {
    width: 100%;
    max-height: clamp(60px, 12vh, 13vh);
    overflow: hidden;
    margin-bottom: 5vh;
  }
}
</style>