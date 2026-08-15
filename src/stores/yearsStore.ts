import { defineStore } from 'pinia'
import { ref } from 'vue'
import { years } from '../data/years'

export const useYearsStore = defineStore('years', () => {
 const sortedYears = years.sort((a, b) => b - a)
    const currentYear = ref(sortedYears[1])
    function computeCurrYear (selectedYear:number){
        currentYear.value = selectedYear
    }

  return {
   sortedYears,
   currentYear,
   computeCurrYear
  }
})
