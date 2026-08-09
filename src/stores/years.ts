
import { defineStore } from 'pinia'


export const useYearsStore = defineStore('years', () => {
    const years = [27, 26,23, 25, 24]
    const sortedYears = [...years].reverse()

    function addNewYear(){

    }

    function deleteYear(){
        
    }
  
})