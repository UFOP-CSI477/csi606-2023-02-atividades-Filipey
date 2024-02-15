import { UpdatePayload } from "network/UpdatePayload"
import { api } from "network/api"
import { CreateUserDTO } from "types/User/CreateUserDTO"
import { User } from "types/User/User"

export async function findAllUsers(): Promise<User[]> {
  const response = await api.get("/users")
  return response.data
}

export async function findUserById(id: number): Promise<User> {
  const response = await api.get(`/users/${id}`)
  return response.data
}

export async function findByUsername(username: string): Promise<User> {
  const response = await api.get(`/users/username/${username}`)
  return response.data
}

export async function createUser(payload: CreateUserDTO): Promise<User> {
  const response = await api.post("/users", payload)
  return response.data
}

export async function updateUserRole(
  payload: UpdatePayload<{ role: string }>
): Promise<User> {
  const response = await api.patch(`/users/roles/${payload.id}`, payload.data)
  return response.data
}

export async function updateUserPicture(
  payload: UpdatePayload<{ file: File }>
): Promise<User> {
  const data = new FormData()
  data.append("file", payload.data.file)
  const response = await api.patch(`/users/roles/${payload.id}`, payload.data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return response.data
}

export async function updateUsername(
  payload: UpdatePayload<{ username: string }>
): Promise<User> {
  const response = await api.patch(`/users/${payload.id}`, payload.data)
  return response.data
}

export async function deleteUser(id: number): Promise<User> {
  const response = await api.delete(`/users/${id}`)
  return response.data
}
