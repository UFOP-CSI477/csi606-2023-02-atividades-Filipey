import { toast } from "@/components/ui/use-toastcomponents"
import {
  createPerson,
  deletePerson,
  updatePerson
} from "@/network/services/personscomponents"

import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useCreatePerson() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["createPerson"],
    mutationFn: createPerson,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllPersons"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}

export function useUpdatePerson() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["updatePerson"],
    mutationFn: updatePerson,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllPersons"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}

export function useDeletePerson() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["deletePerson"],
    mutationFn: deletePerson,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllPersons"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}
