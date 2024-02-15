import { PostReactions } from "types/Post/PostReactions"

export type Reaction = {
  id: number
  value: PostReactions
  created_at: string
  updated_at: string
  post_id: number
  user_id: number
}
