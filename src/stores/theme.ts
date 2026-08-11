import { defineStore } from 'pinia'
import { ref } from 'vue'
import { accentColors } from '../data/colors'

export const useThemeStore = defineStore('theme', () => {
   
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
