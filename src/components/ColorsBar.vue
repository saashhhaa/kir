<script setup lang="ts">
import ColorCard from '../shared/ColorCard.vue';
import { useThemeStore } from '../stores/themeStore.ts';

const themeStore = useThemeStore()

function handleClick (c:string){
    themeStore.setCurrTheme(c)
}
</script>

<template>
    <div class="bar">
       <ColorCard @click="handleClick(c)" :color="c" :is-selected="false" v-for="c in themeStore.accentColors"/>
    </div>
</template>

<style scoped lang="scss">
.bar {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>