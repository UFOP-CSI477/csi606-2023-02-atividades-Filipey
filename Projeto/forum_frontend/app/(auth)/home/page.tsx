"use client"

import { UserPostCard } from "@/components/layout/user-post-card"
import { useLoadTimeline } from "network/services/Posts/queries"
import { useFindAllUsers } from "network/services/Users/queries"

export default function HomePage() {
  const { data: posts } = useLoadTimeline()
  const { data: users } = useFindAllUsers()

  if (!posts || !users) {
    return <div>Carregando...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 my-4 mx-4 w-full">
      {posts.map(post => (
        <div key={post.id} className="my-4">
          <UserPostCard key={post.id} post={post} />
        </div>
      ))}
    </div>
  )
}
