import { ref } from 'vue';

const currentAudio = ref<HTMLAudioElement | null>(null);

export function useAudioManager() {
  function registerPlay(audio: HTMLAudioElement) {
    if (currentAudio.value && currentAudio.value !== audio) {
      currentAudio.value.pause();
    }
    currentAudio.value = audio;
  }

  function unregister(audio: HTMLAudioElement) {
    if (currentAudio.value === audio) {
      currentAudio.value = null;
    }
  }

  return { registerPlay, unregister };
}