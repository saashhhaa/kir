<script lang="ts" setup>
import { ref, onUnmounted } from 'vue';
import { useAudioManager } from '../../composables/useAudioManager';

const props = defineProps<{
  src: string;
  title: string;
  artist?: string;
}>();

const audio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);

const { registerPlay, unregister } = useAudioManager();

function togglePlay() {
  if (!audio.value) return;

  if (isPlaying.value) {
    audio.value.pause();
  } else {
    registerPlay(audio.value);
    audio.value.play();
  }
}
function onPlay() {
  isPlaying.value = true;
}
function onPause() {
  isPlaying.value = false;
}

function onTimeUpdate() {
  if (!audio.value) return;
  currentTime.value = audio.value.currentTime;
}

function onLoadedMetadata() {
  if (!audio.value) return;
  duration.value = audio.value.duration;
}

function onSeek(e: Event) {
  if (!audio.value) return;
  const value = Number((e.target as HTMLInputElement).value);
  audio.value.currentTime = value;
  currentTime.value = value;
}

function onEnded() {
  currentTime.value = 0;
}

function formatTime(sec: number): string {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

onUnmounted(() => {
  if (audio.value) unregister(audio.value);
});
</script>

<template>
  <div class="player">
    <audio
      ref="audio"
      :src="src"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @ended="onEnded"
      @play="onPlay"
      @pause="onPause"
    />

    <div class="player__info">
      <div class="player__title">{{ title }}</div>
      <div class="player__artist" v-if="artist">{{ artist }}</div>

      <div class="player__flex">
        <button class="player__toggle" @click="togglePlay">
          <img class="player__icon" v-if="!isPlaying" src="../../assets/images/audio/play.svg" alt="">
          <img class="player__icon" v-else src="../../assets/images/audio/stop.svg" alt="">
        </button>
        <input
          class="player__seek"
          type="range"
          min="0"
          :max="duration"
          step="0.1"
          :value="currentTime"
          @input="onSeek"
        />
        <div class="player__time">{{ formatTime(duration) }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.player {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;

  &__icon {
    cursor: pointer;
    width: 15px;
    opacity: .6;

      &:hover {
      opacity: 1;
    }
  }

  &__info {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-size: 0.9rem;
    font-weight: 500;
  }

  &__artist {
    font-size: 0.7rem;
    color: var(--secondary-light-text);
    margin-bottom: 6px;
  }

  &__seek {
    width: 100%;
    accent-color: var(--secondary-light-text);
    cursor: pointer;
    height: 1px;
  }

  &__time {
    font-size: 0.5rem;
    color: var(--secondary-light-text);
    margin-top: 2px;
  }

  &__flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>