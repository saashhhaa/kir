<script lang="ts" setup>
import { pictures } from "../data/picturesDB";
import { PictureCard } from "../shared";
</script>

<template>
  <div class="feed">
    <div class="feed__grid">
      <PictureCard
        v-for="pic in pictures"
        :title="pic.title"
        :img="pic.img"
        :id="pic.id"
      />
    </div>
  </div>
</template>

<style lang="scss">
.feed {
  padding: 10vh 5vw;
  background-color: var(--feed-back);
  min-height: 100vh;
  width: 100%;

  &__grid {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
   gap: 30px;

    grid-template-columns: repeat(4, auto);
  }
}
</style>
