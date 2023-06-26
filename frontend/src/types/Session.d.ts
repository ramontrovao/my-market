import type { TUserFullData } from './User'

export type TSession = {
  data: {
    token: string
    user: TUserFullData
    refresh_token: string
  }
}
