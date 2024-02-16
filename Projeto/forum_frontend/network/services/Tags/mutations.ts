import { toast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTag } from "network/services/Tags"

export function useCreateNewTag() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["createTag"],
    mutationFn: createTag,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["findAllTags"]
      })
    },
    onError: res => {
      toast({
        title: "Erro ao criar tag!",
        description: res.response.data.message,
        variant: "destructive"
      })
    }
  })
}
