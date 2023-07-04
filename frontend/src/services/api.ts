import type { TUser, TUserRegisterPayload } from '../types/User'
import { api } from './axios'
import type { TSession } from 'src/types/Session'
import { TOKEN } from '../constants/localStorage'
import type { AxiosResponse } from 'axios'

// Interceptors

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN)

  if (!!token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.log(error)
    if (error.response.status === 401) {
      localStorage.removeItem(TOKEN)
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)

// User Actions

export const createNewUser = async (newUser: TUserRegisterPayload) => {
  const user = await api.post('/users', newUser)

  return user
}

export const getUserProfile = async () => {
  const user: TUser = await api.get('/users/me')

  return user
}

// Session Actions

export const loginUser = async (email: string, password: string) => {
  const sessionReq: TSession = await api.post('/sessions', { email, password })

  return sessionReq
}

export const revalidateUserToken = async (token: string, refresh_token: string) => {
  const userTokenRevalidated = await api.post('/sessions/refresh-token', {
    Headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return userTokenRevalidated
}
