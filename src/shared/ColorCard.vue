<script setup lang="ts">
interface Props {
  color: string;
  isSelected: boolean
}

defineProps<Props>();
</script>

<template>
  <div :style="{background: `${color}`}"
 class="card" :class="{'active':isSelected}">
  
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 35px;
  height: 35px;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
  
  &.active {
    border: var(--light-border);
  }
}
</style>
