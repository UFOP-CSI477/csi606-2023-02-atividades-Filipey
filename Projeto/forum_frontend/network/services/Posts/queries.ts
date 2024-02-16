import { useAuthStore } from "@/hooks/useAuth"
import { useQuery } from "@tanstack/react-query"
import {
  findAllUserFavorites,
  findPostDetails,
  findPostsTimeline
} from "network/services/Posts"

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

export function useLoadUserFavorites() {
  const { data } = useAuthStore()

  return useQuery({
    queryKey: ["userFavorites", data?.userData.id],
    queryFn: () => findAllUserFavorites(data!.userData.id)
  })
}
