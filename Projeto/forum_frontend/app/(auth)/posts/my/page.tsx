"use client"

import { UserPostCard } from "@/components/layout/user-post-card"
import { Skeleton } from "@/components/ui/skeleton"
import { useAuthStore } from "@/hooks/useAuth"
import { useLoadTimeline } from "network/services/Posts/queries"

export default function MyPostsPage() {
  const { data: posts } = useLoadTimeline()
  const { data } = useAuthStore()

  if (!posts) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    )
  }

  const myPosts = posts.filter(post => post.user_id === data?.userData.id)

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 my-4 mx-4 w-full">
      {myPosts.map(post => (
        <div key={post.id} className="my-4">
          <UserPostCard post={post} />
        </div>
      ))}
    </div>
  )
}
