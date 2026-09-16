import { defineStore } from "pinia";
import { ref } from "vue";
import {profile} from "../data/profile.ts";

export const useInfoVisibility = defineStore("InfoVisibility", () => {
    const infoVisibility = ref(profile.INFO_VISIBILITY)

    function changeInfoVisibility(state: boolean) {
        infoVisibility.value = state
    }

    return {
        infoVisibility,
        changeInfoVisibility,
    };
});
