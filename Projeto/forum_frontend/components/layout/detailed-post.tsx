"use client"

import { NewCommentDialog } from "@/components/layout/new-comment-dialog"
import { PostCardAvatar } from "@/components/layout/post-card-avatar"
import { ReactionButton } from "@/components/layout/reaction-button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { FancyMultiSelect } from "@/components/ui/multi-select"
import { useAuthStore } from "@/hooks/useAuth"
import { convertStringDate } from "lib/utils"
import { MessageSquareTextIcon, StarIcon } from "lucide-react"
import {
  useAssignTagsToPost,
  useLikePost,
  useUnlike
} from "network/services/Posts/mutations"
import { useFindAllTags } from "network/services/Tags/queries"
import { useState } from "react"
import { DetailedPost } from "types/Post/DetailedPost"
import { REACTIONS } from "types/Post/PostReactions"
import { Tag } from "types/Tag/Tag"

interface PostWithDetailsProps {
  post: DetailedPost
}

export function PostWithDetails({ post }: PostWithDetailsProps) {
  const { data } = useAuthStore()
  const { mutate: like } = useLikePost(post.id)
  const { mutate: unlike } = useUnlike(post.id)
  const { data: tags } = useFindAllTags()
  const { mutate: assignTagsToPost } = useAssignTagsToPost()

  const [selectedTag, setSelectedTag] = useState<Tag[]>([])
  const [openTags, setOpenTags] = useState(false)
  const [comment, setComment] = useState(false)

  if (!tags) {
    return <div>Carregando...</div>
  }

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

  const handleAssignTagsToPost = () => {
    assignTagsToPost({
      post_id: post.id,
      ids: selectedTag.map(tag => tag.id)
    })
    setOpenTags(false)
  }

  const tagsNotUsedInPost =
    post.tags.length > 0
      ? tags.filter(tag => post.tags.some(pt => pt.tag.id !== tag.id))
      : tags

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
              {data?.userData.id === post.user.id && (
                <Badge
                  className="bg-green-500 hover:bg-green-700 duration-200 hover:cursor-pointer"
                  variant="outline"
                  onClick={e => {
                    e.stopPropagation()
                    setOpenTags(true)
                  }}
                >
                  +Tags
                </Badge>
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
      <Dialog open={openTags} onOpenChange={setOpenTags}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-black">Assinar novas Tags</DialogTitle>
            <DialogDescription>
              Selecione as novas Tags para este Post
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <FancyMultiSelect
              tags={tagsNotUsedInPost}
              selected={selectedTag}
              setSelected={setSelectedTag}
            />
          </div>
          <DialogFooter>
            <Button
              className="bg-green-700 hover:bg-green-800 duration-200 disabled:bg-gray-600"
              disabled={selectedTag.length === 0}
              onClick={handleAssignTagsToPost}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
