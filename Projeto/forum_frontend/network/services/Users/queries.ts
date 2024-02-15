import { useQuery } from "@tanstack/react-query"
import { findAllUsers, findUserById } from "network/services/Users"

export function useFindAllUsers() {
  return useQuery({
    queryKey: ["findAllUsers"],
    queryFn: findAllUsers
  })
}

export function useFindUserById(id: number) {
  return useQuery({
    queryKey: ["findUserById", id],
    queryFn: () => findUserById(id)
  })
}
