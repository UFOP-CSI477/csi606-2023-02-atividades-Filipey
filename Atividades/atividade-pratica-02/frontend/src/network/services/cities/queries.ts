import {
  findAllCities,
  findCityById,
  findCityByName
} from "@/network/services/citiescomponents"
import { useQuery } from "@tanstack/react-query"

export function useFindAllCities() {
  return useQuery({
    queryKey: ["findAllCities"],
    queryFn: findAllCities
  })
}

export function useFindCityById(id: number) {
  return useQuery({
    queryKey: ["findCityById", id],
    queryFn: () => findCityById(id)
  })
}

export function useFindCityByName(name: string) {
  return useQuery({
    queryKey: ["findCityByName", name],
    queryFn: () => findCityByName(name)
  })
}
