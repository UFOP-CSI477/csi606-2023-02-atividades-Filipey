import {
  findAllCollectPlaces,
  findCollectPlaceById,
  findCollectPlaceByName
} from "@/network/services/collectPlacescomponents"
import { useQuery } from "@tanstack/react-query"

export function useFindAllCollectPlaces() {
  return useQuery({
    queryKey: ["findAllCollectPlaces"],
    queryFn: findAllCollectPlaces
  })
}

export function useFindCollectPlaceById(id: number) {
  return useQuery({
    queryKey: ["findCollectPlaceById", id],
    queryFn: () => findCollectPlaceById(id)
  })
}

export function useFindCollectPlaceByName(name: string) {
  return useQuery({
    queryKey: ["findCollectPlaceByName", name],
    queryFn: () => findCollectPlaceByName(name)
  })
}
