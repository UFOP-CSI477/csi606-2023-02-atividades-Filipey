import {
  findAllPersons,
  findPersonById,
  findPersonByName
} from "@/network/services/personscomponents"
import { useQuery } from "@tanstack/react-query"

export function useFindAllPersons() {
  return useQuery({
    queryKey: ["findAllPersons"],
    queryFn: findAllPersons
  })
}

export function useFindPersonById(id: number) {
  return useQuery({
    queryKey: ["findPersonById", id],
    queryFn: () => findPersonById(id)
  })
}

export function useFindPersonByName(name: string) {
  return useQuery({
    queryKey: ["findPersonByName", name],
    queryFn: () => findPersonByName(name)
  })
}
