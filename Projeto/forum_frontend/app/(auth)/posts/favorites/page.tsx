"use client"

import { UserPostCard } from "@/components/layout/user-post-card"
import { Skeleton } from "@/components/ui/skeleton"
import { useLoadUserFavorites } from "network/services/Posts/queries"

export default function FavoritePostsPage() {
  const { data: posts } = useLoadUserFavorites()

  if (!posts) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 my-4 mx-4 w-full">
      {posts.map(post => (
        <div key={post.id} className="my-4">
          <UserPostCard post={post} />
        </div>
      ))}
    </div>
  )
}
