import { toast } from "@/components/ui/use-toastcomponents"
import {
  createCollectPlace,
  deleteCollectPlace,
  updateCollectPlace
} from "@/network/services/collectPlacescomponents"

import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useCreateCollectPlace() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["createCollectPlace"],
    mutationFn: createCollectPlace,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllCollectPlaces"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}

export function useUpdateCollectPlace() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["updateCollectPlace"],
    mutationFn: updateCollectPlace,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllCollectPlaces"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}

export function useDeleteCollectPlace() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["deleteCollectPlace"],
    mutationFn: deleteCollectPlace,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllCollectPlaces"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}
