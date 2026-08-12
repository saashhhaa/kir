import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getHashtags } from '../api/getHashtags';
import type { Hashtag } from '../types/hashtagType';

export const useHashTagsStore = defineStore('hashtag', () => {
const hashtags = ref<Hashtag[]>([])
const currentHashId = ref<number | null>(null)
function setCurrHash(id:number | null){
    currentHashId.value = id
}

async function fetchHashtags () {
  hashtags.value = await getHashtags()
}

  return {
    hashtags,
    currentHashId,
   setCurrHash,
   fetchHashtags
  }
})
