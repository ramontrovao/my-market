export type TUser = {
  id: string
  avatar: string
  name: string
  email: string
  tel: string
}

export type TUserRegisterPayload = {
  name: string
  email: string
  tel: string
  password: string
}

export type TUserFullData = TUser & {
  created_at: string
  updated_at: string
}
