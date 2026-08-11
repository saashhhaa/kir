import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    const accentColors = [
  "rgb(175, 195, 199)",
  "rgb(199, 175, 192)",
  "rgb(171, 193, 177)",
  "rgb(214, 214, 171)",
  "rgb(255, 255, 255)",
];
const currentTheme = ref<string>(accentColors[0]!)
function setCurrTheme(color:string){
    currentTheme.value = color
     document.documentElement.style.setProperty(
        "--accent-color",
        color
      );
}

  return {
    accentColors,
    currentTheme,
   setCurrTheme
  }
})
