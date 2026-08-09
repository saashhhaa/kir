<script setup lang="ts">
interface Props {
  id: number;
  title: string;
  img: string;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <img :src="img" alt="" class="card__img" />
    <div class="card__overlay">
      {{ title }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: fit-content;
  padding: 2px;
  border: var(--dark-border);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: white;

  &__img {
    width: clamp(10vw, 15vw, 20vw);
  }
  &:hover {
    filter: brightness(0.95);
  }
  &:hover &__overlay {
    opacity: 1;
  }

  &__overlay {
    position: absolute;
    color: var(--main-text-inverse);
    font-size: .9rem;
    pointer-events: none;
    opacity: 0;
    text-align: center;
      overflow-wrap: break-word;
      max-width: 80%;
  }
}
</style>
