<script setup lang="ts">

interface Props {
//   tag: string;
  title: string;
  isSelected: boolean
}

defineProps<Props>();
</script>

<template>
  <div :class="{'active': isSelected}" class="tag">
    <img src="@/assets/images/hashtag/hashtag.svg" alt="" class="tag__img">
    <p class="tag__title">{{ title }}</p>
   </div>
</template>

<style scoped lang="scss">
.tag {
 display: flex;
 align-items: center;
 gap:10px;
 padding: 5px 10px;
 border: var(--light-border);
 filter: brightness(.7);
 border-width: 2px;
 opacity: .6;
 cursor: pointer;

 &__img {
    width: 20px;
    opacity: .6;

 }

 &__title {
    font-size: 0.9rem;
 }
 &:hover {
    opacity: .7;
 }
 &.active {
    // opacity: 1;
    background-color: black;
    border-color: transparent;
    color: var(--main-text-inverse);
    .tag__img {
    filter: invert(1);
    font-weight: 800;
  }
 }
}
</style>
