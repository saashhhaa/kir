<script setup lang="ts">
import { ColorCard } from '../../shared';
import { useThemeStore } from '../../stores/theme';

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
  
}
</style>