<script lang="ts" setup>
import { ref } from 'vue';
import { years } from '../input-data/years.ts';

import YearCard from '../shared/YearCard/YearCard.vue';
const openedYear = ref<number | null>(26)

function handleYearClick(year: number) {
     openedYear.value = year 
}
</script>



<template>
<div class="bar">
   <YearCard  @click="handleYearClick" v-for="year in years" :year="year" :is-opened="openedYear === year"/>
</div>
</template>

<style lang="scss">
.bar {
  display: flex;
  gap: 20px;
}
</style>