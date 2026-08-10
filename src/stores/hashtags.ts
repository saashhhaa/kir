import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHashTagsStore = defineStore('hashtag', () => {
const currentHash = ref<string | null>(null)
function setCurrHash(hash:string | null){
    currentHash.value = hash
}

  return {
    currentHash,
   setCurrHash
  }
})
