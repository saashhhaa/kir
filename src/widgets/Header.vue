<script lang="ts" setup>
import ColorsBar from "../components/ColorsBar.vue";
import Profile from "../components/Profile.vue";
import YearsBar from "../components/YearsBar.vue";
import BackButton from "../shared/BackButton.vue";
import { useCollectionsStore } from "../stores/colStore.ts";
import { useInfoVisibility } from "../stores/infoVisibility.ts";
const infoVisibilityStore = useInfoVisibility();
import closed_eye from "@/assets/images/profile/closed-eye.svg";
import eye from "@/assets/images/profile/eye.svg";
import { ref } from "vue";

const collectionsStore = useCollectionsStore();
function handleVisibility() {
  infoVisibilityStore.changeInfoVisibility(!infoVisibilityStore.infoVisibility);
}
const isProfileVisible = ref(true);
function hideProfile() {
  isProfileVisible.value = !isProfileVisible.value;
}
</script>

<template>
  <div :class="{ hiddenProfile: !isProfileVisible }" class="profile">
    <div v-if="isProfileVisible" class="profile__main">
      <Profile />
    </div>
    <div class="profile__flex">
      <YearsBar v-if="collectionsStore.openedCollectionId === null" />
      <BackButton v-else variant="close_collection" class="profile__button" />

      <div class="profile__flex-right">
        <ColorsBar />
        <div class="profile__action-buttons">
          <div class="eye-icon" @click="handleVisibility">
            <img
              :src="infoVisibilityStore.infoVisibility ? eye : closed_eye"
              alt=""
            />
          </div>
          <div @click="hideProfile" class="hide-button">
            <img
              :class="{ rotated: !isProfileVisible }"
              src="@/assets/images/profile/arrow.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  width: 100%;
  background-color: var(--profile-back);
  color: var(--main-text-inverse);
  padding: 10vh 5vw;
  padding-left: clamp(5vw, 6vw, 10vw);
  padding-bottom: 5vh;

  &__flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5vh;
    gap: 3vh;
  }

  &__flex-right {
    display: flex;
    gap: 3vw;
    align-items: center;
  }

  &__action-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  //&__flex-right {
  //  display: flex;
  //  gap: 3vw;
  //  align-items: center;
  //}

  &__main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
}

.eye-icon,
.hide-button {
  opacity: 0.5;

  border: 1.5px white solid;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.eye-icon:hover,
.hide-button:hover {
  opacity: 1;
}
.hide-button img {
  width: 50%;
}
.rotated {
  transform: rotate(-180deg);
}
.hiddenProfile {
  padding-top: 5vh;
  .profile__flex {
    margin: 0;
  }
}

@media (max-width: 800px) {
  .profile {
    &__main {
      flex-direction: column;
    }

    &__button {
      order: 2 !important;
    }
    &__flex-left,
    &__flex-right {
      align-items: start;
    }
  }
}

//@media (max-width: 800px) {
//  .profile__flex {
//    flex-direction: column;
//    align-items: stretch;
//  }
//
//  .profile__flex-right {
//    display: contents;
//  }
//
//  .profile__flex-right .colors-bar {
//    order: 1 !important;
//  }
//
//  .years-bar {
//    order: 2 !important;
//  }
//}
</style>
