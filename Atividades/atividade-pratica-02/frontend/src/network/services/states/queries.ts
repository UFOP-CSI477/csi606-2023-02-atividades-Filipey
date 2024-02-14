import {
  findAllStates,
  findStateById,
  findStateByName
} from "@/network/services/statescomponents"
import { useQuery } from "@tanstack/react-query"

export function useFindAllStates() {
  return useQuery({
    queryKey: ["findAllStates"],
    queryFn: findAllStates
  })
}

export function useFindStateById(id: number) {
  return useQuery({
    queryKey: ["findStateById", id],
    queryFn: () => findStateById(id)
  })
}

export function useFindStateByName(name: string) {
  return useQuery({
    queryKey: ["findStateByName", name],
    queryFn: () => findStateByName(name)
  })
}
