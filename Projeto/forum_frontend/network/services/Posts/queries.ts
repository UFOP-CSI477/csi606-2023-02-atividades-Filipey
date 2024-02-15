import { useQuery } from "@tanstack/react-query"
import { findPostDetails, findPostsTimeline } from "network/services/Posts"

export function useLoadTimeline() {
  return useQuery({
    queryKey: ["timeline"],
    queryFn: findPostsTimeline
  })
}

export function useLoadDetailedPost(id: number) {
  return useQuery({
    queryKey: ["detailedPost", id],
    queryFn: () => findPostDetails(id)
  })
}
