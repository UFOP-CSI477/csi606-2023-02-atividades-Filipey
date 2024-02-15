import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useFindImageByPath } from "network/services/Assets/queries"

interface PostCardAvatarProps {
  path: string
}

export function PostCardAvatar({ path }: PostCardAvatarProps) {
  const { data: picture } = useFindImageByPath(path)

  return (
    <Avatar>
      <AvatarImage src={picture} />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  )
}
