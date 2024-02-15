"use client"

import { PostWithDetails } from "@/components/layout/detailed-post"
import { PostComment } from "@/components/layout/post-comments"
import { Skeleton } from "@/components/ui/skeleton"
import { useLoadDetailedPost } from "network/services/Posts/queries"
import { usePathname } from "next/navigation"

export default function DetailedPostPage() {
  const path = usePathname()
  const postId = path.split("/").pop()
  const { data: post } = useLoadDetailedPost(Number(postId))

  if (!post) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 my-4 mx-4 w-full">
      <PostWithDetails post={post} />
      {post.comments.map(comment => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
