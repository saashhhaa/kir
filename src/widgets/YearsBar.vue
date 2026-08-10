<script lang="ts" setup>

import YearCard from '../shared/YearCard/YearCard.vue';
import { useYearsStore } from '../stores/years.ts';


const yearsStore = useYearsStore()

function handleYearClick(year: number) {
  yearsStore.computeCurrYear(year)
}
</script>

<template>
<div class="bar">
   <YearCard  @click="handleYearClick" v-for="year in yearsStore.sortedYears" :year="year" :is-opened="yearsStore.currentYear === year"/>
</div>
</template>

<style lang="scss">
.bar {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 5vh;
}
</style>