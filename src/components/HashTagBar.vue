<script lang="ts" setup>
import { hashtags } from "../data/hashtags";
import HashTag from "../shared/HashTag.vue";
import { useHashTagsStore } from "../stores/hashtagsStore";
import CounterPics from "../shared/CounterPics.vue";

interface Props {
  amount?: number;
}

defineProps<Props>();

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
      <CounterPics :amount="amount || null"/>
  </div>
</template>

<style scoped lang="scss">
.bar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 5vh 0 2vh;
  width: 100%;
  height: fit-content;
}
</style>
