import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ADMIN_PASSWORD } from '../data/constants'

export const useAdminStore = defineStore('admin', () => {
  const isAdminLogged = ref(
    sessionStorage.getItem('is_admin_logged') === 'true'
  )

    //TODO: проверка пароля ДОЛЖНА происходить на бэкенде/сервере!
  async function login(password: string): Promise<boolean> {
    if (password === ADMIN_PASSWORD) {
      isAdminLogged.value = true

      sessionStorage.setItem(
        'is_admin_logged',
        'true'
      )

      return true
    }

    return false
  }

  function logout() {
    isAdminLogged.value = false

    sessionStorage.removeItem('is_admin_logged')
  }

  return {
    isAdminLogged,
    login,
    logout,
  }
})