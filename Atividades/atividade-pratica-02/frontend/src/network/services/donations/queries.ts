import { toast } from "@/components/ui/use-toastcomponents"
import {
  createDonation,
  deleteDonation,
  updateDonation
} from "@/network/services/donationscomponents"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export function useCreateDonation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["createDonation"],
    mutationFn: createDonation,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllDonations"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}

export function useUpdateDonation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["updateDonation"],
    mutationFn: updateDonation,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllDonations"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}

export function useDeleteDonation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["deleteDonation"],
    mutationFn: deleteDonation,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ["findAllDonations"]
      })
      toast({
        variant: "default",
        description: data.message
      })
    }
  })
}
