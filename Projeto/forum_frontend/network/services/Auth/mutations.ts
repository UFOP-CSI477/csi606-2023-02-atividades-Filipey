import { useMutation } from "@tanstack/react-query"
import { login } from "network/services/Auth"

export function useLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login
  })
}
