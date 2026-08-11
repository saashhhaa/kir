<script lang="ts" setup>
import { ref } from "vue";
import YearsBar from "./YearsBar.vue";
import { EntityLogin, EntityProfile, EntityLogout } from "../entity/index.ts";
import { useAdminStore } from "../stores/admin.ts";
import EntityColorsBar from "../entity/EntityColorsBar/EntityColorsBar.vue";

const admin = useAdminStore();
const isLoginFormVisible = ref(false);

const openLogin = () => {
  if (admin.isAdminLogged) return;
  isLoginFormVisible.value = true;
};

const logOut = () => {
  admin.logout();
  isLoginFormVisible.value = false;
};
const closeLogin = () => {
  isLoginFormVisible.value = false;
};
</script>

<template>
  <div class="profile">
    <div class="profile__main">
      <EntityLogout @click="logOut" v-if="admin.isAdminLogged" />
      <EntityProfile @open-login="openLogin" />
    </div>
    <div class="profile__flex">
      <YearsBar />
      <EntityColorsBar />
    </div>

    <EntityLogin
      v-if="isLoginFormVisible && !admin.isAdminLogged"
      @close="closeLogin"
    />
  </div>
</template>

<style scoped lang="scss">
.profile {
  width: 100%;
  background-color: var(--profile-back);
  color: var(--main-text-inverse);
  padding-left: clamp(5vw, 6vw, 10vw);
  padding: 10vh 5vw;
  padding-bottom: 5vh;

  &__flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
}

@media (max-width: 800px) {
  .profile {
    &__main {
      flex-direction: column;
    }
  }
}
</style>
