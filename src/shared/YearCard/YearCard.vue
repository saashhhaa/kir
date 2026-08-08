<script setup lang="ts">

import folder from '../../assets/images/folder.svg'
import folder_open from '../../assets/images/folder-open.svg'


interface Props {
  year: number
  isOpened: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  click: [year: number]
}>()

function handleClick(year: number) {
  emit('click', year)
}
</script>

<template>
<div @click="handleClick(year)" :class="{'active': isOpened}" class="card">
    <img :src="isOpened? folder_open : folder" alt="" class="card__icon">
    <p :class="{'active': isOpened}" class="card__year">{{ year }}</p>
</div>
</template>

<style lang="scss">
.card {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 15px;
    border: 1px solid var(--secondary-text);
    cursor: pointer;

    &__icon {
        width: 15px;
    }

    &__year {
        color: var(--secondary-text)
    }

    &__year.active {
        color: var(main-text-inverse)
    }
}

.card.active {
    filter: brightness(2);
}

.card:hover {
    filter: brightness(1.4);
}
</style>