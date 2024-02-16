import { useQuery } from "@tanstack/react-query"
import { findAllTags } from "network/services/Tags"

export function useFindAllTags() {
  return useQuery({
    queryKey: ["findAllTags"],
    queryFn: findAllTags
  })
}
