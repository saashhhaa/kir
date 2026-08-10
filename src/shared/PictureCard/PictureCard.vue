<script setup lang="ts">
interface Props {
  id: number;
  title: string;
  img: string;
  hashtag? : string;
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
  height: fit-content;
  border: var(--dark-border);
  position: relative;
  display: inline-block;
  background-color: white;

  margin-bottom: 30px;

  break-inside: avoid;

  &__img {
    width:100%;
    display: block;
    pointer-events: none;
  }

  &:hover {
    .card__overlay {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.538);
    }
  }
  &__overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--main-text-inverse);
    font-size: 0.9rem;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    overflow-wrap: break-word;
  }
}

@media (max-width:800px){
  .card {
    &__img {
      width: 40vw;
    }
  }
}
</style>
