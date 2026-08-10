<script lang="ts" setup>
import { hashtags } from "../data/hashtags";
import { HashTag } from "../shared";
import { useHashTagsStore } from "../stores/hashtags";

const hashTagStore = useHashTagsStore();
function handleClick(hash: string | null) {
  if(hashTagStore.currentHash !== null && hashTagStore.currentHash!==hash){
     hashTagStore.setCurrHash(hash);
  }
  else if (hashTagStore.currentHash == null) {
    hashTagStore.setCurrHash(hash);
  } else {
    hashTagStore.setCurrHash(null);
  }
}
</script>

<template>
  <div class="bar">
    <HashTag
      @click="handleClick(hash)"
      v-for="hash in hashtags"
      :is-selected="hashTagStore.currentHash == hash && true"
      :title="hash"
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
