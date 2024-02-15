import { api } from "network/api"
import { Comment } from "types/Comment/Comment"
import { CreateCommentDTO } from "types/Comment/CreateCommentDTO"

export async function findAllPostComments(postId: number): Promise<Comment[]> {
  const response = await api.get(`/comments/all/post/${postId}`)
  return response.data
}

export async function findAllUserComments(userId: number): Promise<Comment[]> {
  const response = await api.get(`/comments/all/user/${userId}`)
  return response.data
}

export async function findCommentById(id: number): Promise<Comment> {
  const response = await api.get(`/comments/${id}`)
  return response.data
}

export async function createComment(
  payload: CreateCommentDTO
): Promise<Comment> {
  const response = await api.post("/comments", payload)
  return response.data
}

export async function updateComment(payload: {
  body: string
  id: number
}): Promise<Comment> {
  const response = await api.patch(`/comments/${payload.id}`, payload.body)
  return response.data
}
