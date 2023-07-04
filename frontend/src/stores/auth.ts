import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { TUserFullData } from '../types/User'

import { TOKEN } from '../constants/localStorage'

export const useAuthStore = defineStore('auth', () => {
  const loginToken = ref<string | null>(localStorage.getItem(TOKEN))

  const loginUser = ref<TUserFullData | null>({} as TUserFullData)

  const setToken = (tokenValue: string) => {
    localStorage.setItem('@my-market-1.0.0/token', tokenValue)

    loginToken.value = tokenValue
  }

  const setUser = (userValue: TUserFullData) => {
    loginUser.value = userValue
  }

  return {
    loginToken,
    loginUser,

    setToken,
    setUser
  }
})
