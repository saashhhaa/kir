<script lang="ts" setup>
interface Props {
  amount: number | null;
}

defineProps<Props>()
</script>

<template>
  <div class="counter" v-if="amount">
    <span class="counter__amount">{{amount}}</span>
    <img class="counter__icon" src="@/assets/images/image-icon.svg" alt="pic">
  </div>
</template>

<style scoped lang="scss">
.counter {
  opacity: .5;
  display: flex;
  align-items: center;
  gap: .25rem;
  &__icon {
    width: 20px;
    height: 20px;
    opacity: .5;
    cursor: default;
  }
}
</style>