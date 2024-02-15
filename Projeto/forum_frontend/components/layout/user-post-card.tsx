"use client"

import { PostCardAvatar } from "@/components/layout/post-card-avatar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { convertStringDate } from "lib/utils"
import { MessageSquareTextIcon, StarIcon } from "lucide-react"
import { useFindUserById } from "network/services/Users/queries"
import { useRouter } from "next/navigation"
import { TimelinePost } from "types/Post/TimelinePost"

interface UserPostCardProps {
  post: TimelinePost
}

export function UserPostCard({ post }: UserPostCardProps) {
  const { data: postOwner } = useFindUserById(post.user_id)
  const router = useRouter()

  if (!postOwner) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    )
  }

  const handleRedirectToPost = () => {
    router.push(`/posts/${post.id}`)
  }

  return (
    <Card
      key={post.id}
      onClick={handleRedirectToPost}
      className="bg-slate-200 hover:cursor-pointer hover:bg-slate-300 duration-200"
    >
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          <div className="flex items-center justify-start text-center space-x-4">
            {postOwner.picture_path ? (
              <PostCardAvatar path={postOwner.picture_path} />
            ) : (
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
            <span className="font-semibold text-black">
              {postOwner.username}
            </span>
            {post.tags.length > 0 ? (
              post.tags.map(tag => (
                <Badge key={tag.tag.id}>{tag.tag.name}</Badge>
              ))
            ) : (
              <Badge variant="secondary">Nenhuma Tag</Badge>
            )}
          </div>
          <div className="mt-2">
            <span>Enviado em {convertStringDate(postOwner.created_at)}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="hover:cursor-pointer">
        <div className="flex items-center justify-start">
          <span className="font-bold">{post.body}</span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-end">
          <div className="flex-row items-center justify-center space-y-2">
            <button className="flex items-center">
              <MessageSquareTextIcon className="text-sky-500" />
              <span className="font-semibold ml-1">
                {post._count.comments} Comentários
              </span>
            </button>
            <button className="flex items-center">
              <StarIcon className="text-yellow-500" />
              <span className="font-semibold ml-1">
                {post._count.favorites} Favoritos
              </span>
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
