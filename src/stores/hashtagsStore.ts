import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHashTagsStore = defineStore('hashtag', () => {
const currentHashId = ref<number | null>(1)
function setCurrHash(id:number | null){
    currentHashId.value = id
}

  return {
   currentHashId,
   setCurrHash,
  }
})
