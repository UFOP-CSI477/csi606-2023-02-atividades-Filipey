import { PostCardAvatar } from "@/components/layout/post-card-avatar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from "@/components/ui/card"
import { convertStringDate } from "lib/utils"

interface PostCommentProps {
  comment: {
    body: string
    created_at: string
    id: number
    user: {
      picture_path: string
      id: number
      username: string
    }
  }
}

export function PostComment({ comment }: PostCommentProps) {
  return (
    <Card className="bg-slate-300 mx-8">
      <CardHeader>
        <CardDescription>
          <div className="flex items-center justify-start text-center space-x-4">
            {comment.user.picture_path ? (
              <PostCardAvatar path={comment.user.picture_path} />
            ) : (
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
            <span className="font-semibold text-black">
              {comment.user.username}
            </span>
          </div>
          <div className="mt-2">
            <span>Enviado em {convertStringDate(comment.created_at)}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-start">
          <span className="font-bold">{comment.body}</span>
        </div>
      </CardContent>
    </Card>
  )
}
