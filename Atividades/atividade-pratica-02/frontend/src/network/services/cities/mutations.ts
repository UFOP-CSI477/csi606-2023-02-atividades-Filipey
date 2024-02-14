import { toast } from "@/components/ui/use-toastcomponents"
import {
  createCity,
  deleteCity,
  updateCity
} from "@/network/services/citiescomponents"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useCreateCity() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["createCity"],
    mutationFn: createCity,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllCities"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}

export function useUpdateCity() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["updateCity"],
    mutationFn: updateCity,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllCities"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}

export function useDeleteCity() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["deleteCity"],
    mutationFn: deleteCity,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllCities"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}
