<script lang="ts" setup>
import { ref } from "vue";
import YearsBar from "./YearsBar.vue";
import {EntityLogin, EntityProfile, EntityLogout} from "../entity/index.ts";
import { useAdminStore } from "../stores/admin.ts";


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
      <EntityProfile @open-login="openLogin"/>
    </div>

    <YearsBar />

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
  padding-right: clamp(5vw, 6vw, 10vw);
  padding-top: 10vh;
  padding-bottom: 5vh;

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
