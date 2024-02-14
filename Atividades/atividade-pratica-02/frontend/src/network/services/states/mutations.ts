import { toast } from "@/components/ui/use-toastcomponents"
import {
  createState,
  deleteState,
  updateState
} from "@/network/services/statescomponents"

import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useCreateState() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["createState"],
    mutationFn: createState,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllStates"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}

export function useUpdateState() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["updateState"],
    mutationFn: updateState,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllStates"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}

export function useDeleteState() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["deleteState"],
    mutationFn: deleteState,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllStates"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}
