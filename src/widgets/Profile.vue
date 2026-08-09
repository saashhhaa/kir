<script lang="ts" setup>
import { ref } from "vue";
import { profile } from "../data/profile.ts";
import YearsBar from "./YearsBar.vue";
import EntityLogin from "../entity/EntityLogin/EntityLogin.vue";
import EntityLogout from "../entity/EntityLogout/EntityLogout.vue";
import { useAdminStore } from "../stores/admin.ts";
import AudioPlayer from "../entity/AudioPlayer/AudioPlayer.vue";
import { tracks } from "../data/tracks.ts";
const admin = useAdminStore();
const isLoginFormVisible = ref(false);

const logOut = () => {
  admin.logout();
  isLoginFormVisible.value = false;
};
</script>

<template>
  <div class="profile">
    <div class="profile__main">
      <EntityLogout @click="logOut" v-if="admin.isAdminLogged" />
      <div class="profile__info">
        <div
          @click="isLoginFormVisible = true"
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
          <a class="profile__link" href="https://t.me/veiprq8"
            ><img
            class="profile__link-icon"
              src="../assets/images/profile/telegram.svg"
              alt=""
            />kiriesh</a
          >
        </div>
      </div>

      <div :class="{ goDown: admin.isAdminLogged }" class="playlist">
        <AudioPlayer v-for="track in tracks" :key="track.src" v-bind="track" />
      </div>
    </div>

    <YearsBar />

    <EntityLogin
      v-if="isLoginFormVisible && !admin.isAdminLogged"
      @close="isLoginFormVisible = false"
    />
  </div>
</template>

<style lang="scss">
.profile {
  width: 100%;
  background-color: var(--profile-back);
  color: var(--main-text-inverse);
  padding: 5vh 10vw;

  &__main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }

  &__info {
    display: flex;
    gap: 30px;
  }

  &__nickname {
    font-size: 2rem;
    color: var(--accent-color);
    margin-bottom: 5px;
  }

  &__description {
    color: var(--secondary-light-text);
    font-size: 0.8rem;
    white-space: pre-line;
  }

  &__link {
    text-decoration:underline;
    display: flex;
    margin-top: 20px;
    align-items: center;
    gap: 10px;
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
    cursor: pointer;
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
  width: min(300px, 30%);

  &.goDown {
    margin-top: 7vh;
  }
}

@media (max-width: 800px) {
  .profile {
    &__main {
      flex-direction: column;
    }
  
  }

  .playlist {
    width: 100%;
    max-height: clamp(60px, 12vh, 13vh);
    overflow: hidden;
    margin-bottom: 5vh;
  }
}
</style>
