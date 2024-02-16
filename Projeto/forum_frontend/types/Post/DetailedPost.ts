import { Attachment } from "types/Attachment/Attachment"
import { Reaction } from "types/Post/Reaction"
import { Tag } from "types/Tag/Tag"

export type FavoritePost = {
  id: number
  updated_at: string
  post_id: number
  user_id: number
}

export type DetailedPost = {
  id: number
  attachments: Attachment[]
  body: string
  comments: [
    {
      body: string
      created_at: string
      id: number
      user: {
        picture_path: string
        id: number
        username: string
      }
    }
  ]
  reactions: Reaction[]
  favorites: FavoritePost[]
  created_at: string
  title: string
  user: {
    id: number
    username: string
    picture_path: string | null
  }
  tags: [
    {
      tag: Tag
    }
  ]
}
