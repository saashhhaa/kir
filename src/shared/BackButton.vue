<script setup lang="ts">
const emit = defineEmits(["closeCollection"]);
</script>


<template>
    <div @click="$emit('closeCollection')" class="back-btn">
      <img src="@/assets/images/exit.svg" alt="" />
    </div>
</template>

<style scoped lang="scss">
back-btn {
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