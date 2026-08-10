<script lang="ts" setup>
import { computed } from "vue";
import { pictures } from "../data/picturesDB";
import { PictureCard } from "../shared";
import { useYearsStore } from "../stores/years.ts";
import HashTagBar from "./HashTagBar.vue";
import { useHashTagsStore } from "../stores/hashtags.ts";

const yearsStore = useYearsStore()
const hashTagsStore = useHashTagsStore()

const filteredPictures = computed(()=>{
  if(hashTagsStore.currentHash !==null ){
  return pictures.filter((pic) => (pic.year === yearsStore.currentYear && pic.hashtag === hashTagsStore.currentHash))
} else {
  return pictures.filter((pic) => pic.year === yearsStore.currentYear)

}
})


</script>


<template>
  <div class="feed">
    <HashTagBar/>
    <div class="feed__grid">
      <PictureCard
      v-if="filteredPictures.length !==0"
        v-for="pic in filteredPictures"
        :title="pic.title"
        :img="pic.img"
        :id="pic.id"
      />
      <p v-else class="feed__oops">૮₍ᵔ⤙ᵔ ₎ა</p>
    </div>
  </div>
  
</template>

<style lang="scss">
.feed {
  padding:0vh 5vw;
  background-color: var(--feed-back);
  min-height: 100vh;
  width: 100%;

  &__grid {
    column-count: 4;
  column-gap: 30px;
  width: 100%;

    grid-template-columns: repeat(4, auto);
  }

  &__oops {
    text-align: center;
    width: 90vw;
    font-size: 2rem;
    margin: 0 auto;
    opacity: .3;
    cursor: help;
  }
}

@media (max-width: 1200px) {
  .feed__grid {
    column-count: 3;
  }
}

@media (max-width: 800px) {
  .feed__grid {
    column-count: 2;
  }
}

@media (max-width: 500px) {
  .feed__grid {
    column-count: 1;
  }
}
</style>
