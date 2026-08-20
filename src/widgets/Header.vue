<script lang="ts" setup>
import ColorsBar from "../components/ColorsBar.vue";
import Profile from "../components/Profile.vue";
import YearsBar from "../components/YearsBar.vue";


</script>

<template>
  <div class="profile">
    <div class="profile__main">
      <Profile />
    </div>
    <div class="profile__flex">
      <YearsBar />
      <ColorsBar />
    </div>

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
    align-items: center;
    flex-wrap: wrap;
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
