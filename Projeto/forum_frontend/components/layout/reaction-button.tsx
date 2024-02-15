"use client"

import { useAuthStore } from "@/hooks/useAuth"
import {
  AngryIcon,
  FrownIcon,
  HandMetal,
  HeartIcon,
  LaughIcon,
  ThumbsUpIcon
} from "lucide-react"
import { useReactToPost } from "network/services/Posts/mutations"
import { PostReactions } from "types/Post/PostReactions"

interface ReactionButtonProps {
  value: PostReactions
  postId: number
  totalValues: number
}

export const ReactionsIcons = [
  {
    reaction: PostReactions.HAHA,
    icon: <LaughIcon className="text-yellow-500" />
  },
  {
    reaction: PostReactions.LIKE,
    icon: <ThumbsUpIcon className="text-sky-500" />
  },
  {
    reaction: PostReactions.LOVE,
    icon: <HeartIcon className="text-red-500" />
  },
  {
    reaction: PostReactions.WOW,
    icon: <HandMetal className="text-green-500" />
  },
  {
    reaction: PostReactions.ANGRY,
    icon: <AngryIcon className="text-orange-700" />
  },
  {
    reaction: PostReactions.SAD,
    icon: <FrownIcon className="text-purple-400" />
  }
]

export function ReactionButton({
  value,
  totalValues,
  postId
}: ReactionButtonProps) {
  const { data } = useAuthStore()
  const { mutate: react } = useReactToPost(postId)

  return (
    <button
      onClick={() =>
        react({
          userId: data!.userData.id,
          postId: postId,
          reaction: value
        })
      }
      className="flex items-center"
    >
      {ReactionsIcons.find(r => r.reaction === value)?.icon}
      <span className="font-semibold ml-1">
        {totalValues} {value}
      </span>
    </button>
  )
}
