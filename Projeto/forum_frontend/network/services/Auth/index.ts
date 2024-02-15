import { UserData } from "@/hooks/useAuth"
import { api } from "network/api"

interface LoginPayload {
  username: string
  password: string
}

interface LoginResponse {
  user: UserData
  access_token: string
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const response = await api.post("/auth/login", payload)
  return response.data
}
