<script setup lang="ts">
import folder from "@/assets/images/years/folder.svg";
import folder_open from "@/assets/images/years/folder-open.svg";

interface Props {
  year: number;
  isOpened: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  click: [year: number];
}>();

function handleClick(year: number) {
  emit("click", year);
}
</script>

<template>
  <div @click="handleClick(year)" :class="{ 'active': isOpened }" class="card">
    <img :class="{ 'active': isOpened }" :src="isOpened ? folder_open : folder" alt="" class="card__icon" />
    
    <p :class="{ 'active': isOpened }" class="card__year">{{ year }}</p>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 30px 10px 15px;
  border: 1px solid var(--secondary-text);
  cursor: pointer;

  &__icon {
    opacity: .6;
    width: 15px;

    &.active {
      opacity: 1;
    }
  }

  &__year {
    color: var(--secondary-text);

    &.active {
      color:var( --accent-color);;
    }
  }

  &.active {
   border-color: var( --accent-color);
  }

  &:hover {
    filter: brightness(1.4);
  }
}
</style>
