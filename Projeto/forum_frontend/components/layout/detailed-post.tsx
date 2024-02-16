"use client"

import { NewCommentDialog } from "@/components/layout/new-comment-dialog"
import { PostCardAvatar } from "@/components/layout/post-card-avatar"
import { ReactionButton } from "@/components/layout/reaction-button"
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
import { useAuthStore } from "@/hooks/useAuth"
import { convertStringDate } from "lib/utils"
import { MessageSquareTextIcon, StarIcon } from "lucide-react"
import { useLikePost, useUnlike } from "network/services/Posts/mutations"
import { useState } from "react"
import { DetailedPost } from "types/Post/DetailedPost"
import { REACTIONS } from "types/Post/PostReactions"

interface PostWithDetailsProps {
  post: DetailedPost
}

export function PostWithDetails({ post }: PostWithDetailsProps) {
  const { data } = useAuthStore()
  const { mutate: like } = useLikePost(post.id)
  const { mutate: unlike } = useUnlike(post.id)

  const [comment, setComment] = useState(false)

  const handleUserLikes = () => {
    const hasUserLikedThisPost = post.favorites.filter(
      fav => fav.user_id === data!.userData.id
    )

    if (hasUserLikedThisPost.length > 0) {
      unlike({
        userId: data!.userData.id,
        postId: post.id
      })
    } else {
      like({
        userId: data!.userData.id,
        postId: post.id
      })
    }
  }

  return (
    <>
      <Card key={post.id} className="bg-slate-200">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>
            <div className="flex items-center justify-start text-center space-x-4">
              {post.user.picture_path ? (
                <PostCardAvatar path={post.user.picture_path} />
              ) : (
                <Avatar>
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
              <span className="font-semibold text-black">
                {post.user.username}
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
              <span>Enviado em {convertStringDate(post.created_at)}</span>
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
              <button
                onClick={() => setComment(true)}
                className="flex items-center"
              >
                <MessageSquareTextIcon className="text-sky-500" />
                <span className="font-semibold ml-1">
                  {post.comments.length} Comentários
                </span>
              </button>
              <button onClick={handleUserLikes} className="flex items-center">
                <StarIcon className="text-yellow-500" />
                <span className="font-semibold ml-1">
                  {post.favorites.length} Favoritos
                </span>
              </button>
            </div>
          </div>
        </CardFooter>
        <CardFooter>
          <div className="flex items-center text-center justify-start space-x-4">
            {REACTIONS.map(reaction => (
              <ReactionButton
                key={reaction}
                value={reaction}
                totalValues={
                  post.reactions.filter(r => r.value === reaction).length
                }
                postId={post.id}
              />
            ))}
          </div>
        </CardFooter>
      </Card>
      <NewCommentDialog
        open={comment}
        onOpenChange={setComment}
        postId={post.id}
      />
    </>
  )
}
