import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCollectionsStore = defineStore('col', () => {
const isCollectionOpen = ref(false)
const openedCollectionId = ref<number | null>(null)
function openCollection(col_id : number){
    isCollectionOpen.value = true
    openedCollectionId.value = col_id
}

function closeCollection (){
  isCollectionOpen.value = false
  openedCollectionId.value = null
}

  return {
   isCollectionOpen,
   openCollection,
   closeCollection
  }
})
