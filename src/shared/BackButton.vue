<script setup lang="ts">
import { useCollectionsStore } from "../stores/colStore";

interface Props {
  variant: string;
}

const props = defineProps<Props>();
const collectionsStore = useCollectionsStore();

function close() {
  if (props.variant === "close_collection") collectionsStore.closeCollection();
}
</script>

<template>
  <div @click="close" class="back-btn">
    <img src="@/assets/images/exit.svg" alt="" />
  </div>
</template>

<style scoped lang="scss">
.back-btn {
  border: 2px solid rgba(0, 0, 0, 0.644);
  cursor: pointer;
  width: fit-content;
  margin-bottom: 5vh;
  padding: 10px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
}
</style>
