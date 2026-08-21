import { defineStore } from "pinia";
import { ref } from "vue";
import { accentColors } from "../data/colors";

export const useThemeStore = defineStore("theme", () => {
  const savedTheme = sessionStorage.getItem("theme");
  const currentTheme = ref<string>(
    savedTheme !== null ? savedTheme : accentColors[0]!,
  );
  function setCurrTheme(color: string) {
    currentTheme.value = color;
    sessionStorage.setItem("theme", color);
    document.documentElement.style.setProperty("--accent-color", color);
  }

   document.documentElement.style.setProperty(
    "--accent-color",
    currentTheme.value
  );

  return {
    accentColors,
    currentTheme,
    setCurrTheme,
  };
});
