import { toast } from "@/components/ui/use-toastcomponents"
import {
  createBloodType,
  deleteBloodType,
  updateBloodType
} from "@/network/services/bloodTypescomponents"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useDeleteBloodType() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["deleteBloodType"],
    mutationFn: deleteBloodType,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["findAllBloodTypes"]
      })
      toast({
        variant: "default",
        description: "Tipo sanguíneo deletado com sucesso."
      })
    }
  })
}

export function useUpdateBloodType() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["updateBloodType"],
    mutationFn: updateBloodType,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["findAllBloodTypes"]
      })
    }
  })
}

export function useCreateBloodType() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["createBloodType"],
    mutationFn: createBloodType,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["findAllBloodTypes"]
      })
    }
  })
}
