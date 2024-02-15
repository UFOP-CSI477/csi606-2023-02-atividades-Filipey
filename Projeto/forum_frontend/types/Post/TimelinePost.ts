export type TimelinePost = {
  body: string
  title: string
  id: number
  created_at: string
  tags: [
    {
      tag: {
        name: string
        id: number
      }
    }
  ]
  user_id: number
  _count: {
    comments: number
    reactions: number
    favorites: number
  }
}
