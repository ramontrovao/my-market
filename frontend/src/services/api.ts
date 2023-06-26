import type { TUser, TUserRegisterPayload } from 'src/types/User'
import { api } from './axios'
import type { TSession } from 'src/types/Session'

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

  return sessionReq.data.token
}
