<script setup lang="ts">
import ColorCard from "../shared/ColorCard.vue";
import { useThemeStore } from "../stores/themeStore.ts";
const themeStore = useThemeStore();
function changeTheme(c: string) {
  themeStore.setCurrTheme(c);
}
</script>

<template>
  <div class="bar">
    <ColorCard
      @click="changeTheme(c)"
      :color="c"
      :is-selected="false"
      v-for="(c, index) in themeStore.accentColors"
      :key="index"
    />
  </div>
</template>

<style scoped lang="scss">
.bar {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}
</style>
