<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <img src="@/assets/images/years/folder.svg" alt="" class="card__img" />
    <p class="card__title">{{ title }}</p>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--profile-back);
  padding: 20px;
  cursor: pointer;
  border: 2px solid white;
  opacity: 0.7;

  &__img {
    width: 6vw;
  }

  &__title {
    font-size: 0.8rem;
    opacity: 0.5;
    max-width: 6vw;
    color: var(--main-text-inverse);
  }

  &:hover {
    opacity: 1;
  }
}
</style>
