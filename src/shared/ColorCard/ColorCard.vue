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
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
  
  &.active {
    border: var(--light-border);
  }
}
</style>
