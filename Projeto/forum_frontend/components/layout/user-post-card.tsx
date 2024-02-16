"use client"

import { PostCardAvatar } from "@/components/layout/post-card-avatar"
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
import { Skeleton } from "@/components/ui/skeleton"
import { useAuthStore } from "@/hooks/useAuth"
import { convertStringDate } from "lib/utils"
import { MessageSquareTextIcon, StarIcon } from "lucide-react"
import { useAssignTagsToPost } from "network/services/Posts/mutations"
import { useFindAllTags } from "network/services/Tags/queries"
import { useFindUserById } from "network/services/Users/queries"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { TimelinePost } from "types/Post/TimelinePost"
import { Tag } from "types/Tag/Tag"

interface UserPostCardProps {
  post: TimelinePost
}

export function UserPostCard({ post }: UserPostCardProps) {
  const { data: authData } = useAuthStore()
  const { data: tags } = useFindAllTags()
  const { data: postOwner } = useFindUserById(post.user_id)
  const { mutate: assignTagsToPost } = useAssignTagsToPost()

  const [selectedTag, setSelectedTag] = useState<Tag[]>([])
  const [openTags, setOpenTags] = useState(false)
  const router = useRouter()

  if (!postOwner || !tags) {
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
              {authData?.userData.id === postOwner.id && (
                <Badge
                  className="bg-green-500 hover:bg-green-700 duration-200"
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
