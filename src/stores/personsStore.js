import { defineStore } from 'pinia'

export const usePersonsStore = defineStore({
  id: 'persons',
  state: () => ({ persons:[] })
})