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
    font-size: 0.9rem;
    opacity: 0.5;
    white-space: wrap;
    overflow: hidden;
    max-width: 100px;
    color: var(--main-text-inverse);
  }

  &:hover {
    opacity: 1;
  }
}

@media (max-width: 1000px) {
 .card {
    &__title {
    max-width: 50px;
  }

 }
}
</style>
