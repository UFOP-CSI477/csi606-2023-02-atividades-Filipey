import { useQuery } from "@tanstack/react-query"
import { findImageByPath } from "network/services/Assets"

export function useFindImageByPath(path: string) {
  return useQuery({
    queryKey: ["findImageByPath", path],
    queryFn: () => findImageByPath(path)
  })
}
