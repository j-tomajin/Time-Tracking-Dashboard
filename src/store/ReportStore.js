import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useReportStore = defineStore('report-store', {
  state: () => {
    // states here
    return{ 
      report: ref('Daily'),
     }
  },
  getters: {
    // getters here
  },
  actions: {
    // actions here
    changeReport(pick) {
      this.report = pick
    }
  }
})