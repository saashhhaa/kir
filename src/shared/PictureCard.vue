<script setup lang="ts">
import {useInfoVisibility} from "../stores/infoVisibility.ts";

interface Props {
  title: string;
  img: string;
  hashtag?: string;
}
const infoVisibilityStore = useInfoVisibility()

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <img :src="img" :alt="title" class="card__img" decoding="async" />
    <div  class="card__overlay">
      {{infoVisibilityStore.infoVisibility ? title : '' }}
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
    width: 100%;
    user-select: none;
    display: block;
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

@media (max-width: 800px) {
  .card {
    &__img {
      width: 40vw;
    }
  }
}
</style>
