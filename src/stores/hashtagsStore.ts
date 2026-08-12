import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getHashtags } from '../api/getHashtags';
import type { Hashtag } from '../types/hashtagType';

export const useHashTagsStore = defineStore('hashtag', () => {
const hashtags = ref<Hashtag[]>([])
const currentHashId = ref<number | null>()
function setCurrHash(id:number | null){
    currentHashId.value = id
}

async function fetchHashtags () {
  hashtags.value = await getHashtags()
  if(hashtags.value.length >0 ){
     currentHashId.value = hashtags.value[0]!.id
  }
 
}

  return {
    hashtags,
    currentHashId,
   setCurrHash,
   fetchHashtags
  }
})
