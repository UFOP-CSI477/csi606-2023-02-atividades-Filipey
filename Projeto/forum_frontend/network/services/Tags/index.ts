import { UpdatePayload } from "network/UpdatePayload"
import { api } from "network/api"
import { Tag } from "types/Tag/Tag"

export async function findAllTags(): Promise<Tag[]> {
  const response = await api.get("/tags")
  return response.data
}

export async function findTagById(id: number): Promise<Tag> {
  const response = await api.get(`/tags/${id}`)
  return response.data
}

export async function createTag(payload: { name: string }): Promise<Tag> {
  const response = await api.post("/tags", payload)
  return response.data
}

export async function updateTagName(
  payload: UpdatePayload<{ name: string }>
): Promise<Tag> {
  const response = await api.patch(`/tags/${payload.id}`, payload.data)
  return response.data
}

export async function deleteTag(id: number): Promise<Tag> {
  const response = await api.delete(`/tags/${id}`)
  return response.data
}
