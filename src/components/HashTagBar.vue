<script lang="ts" setup>
import { hashtags } from "../data/hashtags";
import HashTag from "../shared/HashTag.vue";
import { useHashTagsStore } from "../stores/hashtagsStore";

const hashTagStore = useHashTagsStore();


function handleClick(id: number) {
  if (hashTagStore.currentHashId === id) {
    hashTagStore.setCurrHash(null);
  } else {
    hashTagStore.setCurrHash(id);
  }
}
</script>

<template>
    <div class="bar">
    <HashTag
      v-for="hash in hashtags"
      :key="hash.id"
      :is-selected="hashTagStore.currentHashId === hash.id"
      :code="hash.code"
      @click="handleClick(hash.id)"
    />
  </div>
</template>

<style scoped lang="scss">
.bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-bottom: 10vh;
}
</style>
