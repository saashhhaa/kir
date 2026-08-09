<script lang="ts" setup>
import { ref } from 'vue';
import { sortedYears as years } from '../data/years.ts';

import YearCard from '../shared/YearCard/YearCard.vue';

const openedYear = ref(years[0])

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