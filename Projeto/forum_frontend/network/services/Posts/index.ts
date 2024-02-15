import { api } from "network/api"
import { CreatePostDTO } from "types/Post/CreatePostDTO"
import { DetailedPost } from "types/Post/DetailedPost"
import { Post } from "types/Post/Post"
import { PostReactions } from "types/Post/PostReactions"
import { TimelinePost } from "types/Post/TimelinePost"

export async function findAllPosts(): Promise<Post[]> {
  const response = await api.get("/posts")
  return response.data
}

export async function findPostById(id: number): Promise<Post> {
  const response = await api.get(`/posts/by_id/${id}`)
  return response.data
}

export async function findPostDetails(id: number): Promise<DetailedPost> {
  const response = await api.get(`/posts/detailed/${id}`)
  return response.data
}

export async function findPostsTimeline(): Promise<TimelinePost[]> {
  const response = await api.get("/posts/timeline")
  return response.data
}

export async function createPost(payload: CreatePostDTO): Promise<Post> {
  const response = await api.post("/posts", payload)
  return response.data
}

export async function assignTagsToPost(payload: {
  ids: number[]
  post_id: number
}): Promise<{ count: number }> {
  const response = await api.post(`/posts/tags/${payload.post_id}`, payload.ids)
  return response.data
}

export async function likePost(payload: {
  userId: number
  postId: number
}): Promise<Post> {
  const response = await api.post(
    `/posts/like/${payload.postId}`,
    {},
    {
      params: {
        userId: payload.userId
      }
    }
  )
  return response.data
}

export async function unlikePost(payload: {
  userId: number
  postId: number
}): Promise<Post> {
  const response = await api.post(
    `/posts/unlike/${payload.postId}`,
    {},
    {
      params: {
        userId: payload.userId
      }
    }
  )
  return response.data
}

export async function reactToPost(payload: {
  userId: number
  postId: number
  reaction: PostReactions
}): Promise<Post> {
  const response = await api.post(
    `/posts/react/${payload.postId}`,
    { reaction: payload.reaction },
    {
      params: {
        userId: payload.userId
      }
    }
  )
  return response.data
}

export async function deletePost(id: number): Promise<Post> {
  const response = await api.delete(`/posts/${id}`)
  return response.data
}
