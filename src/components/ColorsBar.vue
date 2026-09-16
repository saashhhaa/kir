<script setup lang="ts">
import ColorCard from '../shared/ColorCard.vue';
import { useThemeStore } from '../stores/themeStore.ts';
import {useInfoVisibility} from "../stores/infoVisibility.ts";
import closed_eye from '@/assets/images/profile/closed-eye.svg'
import eye from '@/assets/images/profile/eye.svg'

const themeStore = useThemeStore()
const infoVisibilityStore = useInfoVisibility()
function changeTheme (c:string){
    themeStore.setCurrTheme(c)
}

function handleVisibility(){
  infoVisibilityStore.changeInfoVisibility(!infoVisibilityStore.infoVisibility)
}
</script>

<template>
    <div class="bar">
      <div class="eye-icon" @click="handleVisibility"><img :src="infoVisibilityStore.infoVisibility? eye : closed_eye" alt=""></div>
       <ColorCard @click="changeTheme(c)" :color="c" :is-selected="false" v-for="(c, index) in themeStore.accentColors" :key="index"/>
    </div>
</template>

<style scoped lang="scss">
.bar {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}

.eye-icon {
  opacity: .5;

  border: 1.5px white solid;
  height: 35px !important;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.eye-icon:hover {
  opacity: 1;
}
</style>