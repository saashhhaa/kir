import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCollectionsStore = defineStore('col', () => {
const openedCollectionId = ref<number | null>(null)

function closeCollection (){
  openedCollectionId.value = null
}
  return {
   closeCollection,
   openedCollectionId
  }
})
