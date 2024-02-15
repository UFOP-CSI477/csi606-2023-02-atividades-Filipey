import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export interface UserData {
  username: string
  role: string
  picture_path: string
  id: number
}

export interface AuthData {
  userData: UserData
  access_token: string
}

interface AuthStore {
  data: AuthData | undefined
  setData: (data: AuthData | undefined) => void
}

export const useAuthStore = create(
  persist<AuthStore>(
    set => ({
      data: undefined,
      setData: (data: AuthData | undefined) => set({ data })
    }),
    {
      name: "authData",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
