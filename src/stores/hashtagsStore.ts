import { defineStore } from "pinia";
import { ref } from "vue";

export const useHashTagsStore = defineStore("hashtag", () => {
  const savedHashtag = sessionStorage.getItem("hashtag");

  const currentHashId = ref<number | null>(
    savedHashtag !== null ? Number(savedHashtag) : 1,
  );

  function setCurrHash(id: number | null) {
    currentHashId.value = id;
    if (id === null) {
      sessionStorage.removeItem("hashtag");
    } else {
      sessionStorage.setItem("hashtag", String(id));
    }
  }

  return {
    currentHashId,
    setCurrHash,
  };
});
