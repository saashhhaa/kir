<script lang="ts" setup>
import { onMounted } from "vue";
import { HashTag } from "../shared";
import { useHashTagsStore } from "../stores/hashtagsStore";

const hashTagStore = useHashTagsStore();

onMounted(()=>{
  hashTagStore.fetchHashtags()
})

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
      v-for="hash in hashTagStore.hashtags"
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
