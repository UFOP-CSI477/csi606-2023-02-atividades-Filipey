import { toast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createComment } from "network/services/Comments"
import { likePost, reactToPost, unlikePost } from "network/services/Posts"

export function useLikePost(postId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["likePost", postId],
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["detailedPost", postId]
      })
      queryClient.invalidateQueries({
        queryKey: ["timeline"]
      })
      toast({
        title: "Seu favorito foi salvo! :)"
      })
    },
    onError: res => {
      toast({
        title: "Erro ao reagir à esta postagem!",
        description: res.response.data.message,
        variant: "destructive"
      })
    }
  })
}

export function useUnlike(postId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["unlikePost", postId],
    mutationFn: unlikePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["detailedPost", postId]
      })
      queryClient.invalidateQueries({
        queryKey: ["timeline"]
      })
      toast({
        title: "Seu favorito foi retirado :O"
      })
    },
    onError: res => {
      toast({
        title: "Erro ao reagir à esta postagem!",
        description: res.response.data.message,
        variant: "destructive"
      })
    }
  })
}

export function useReactToPost(postId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["reactToPost", postId],
    mutationFn: reactToPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["detailedPost", postId]
      })
      queryClient.invalidateQueries({
        queryKey: ["timeline"]
      })
      toast({
        title: "Sua reação foi gravada com sucesso! :)"
      })
    },
    onError: res => {
      toast({
        title: "Erro ao reagir à esta postagem!",
        description: res.response.data.message,
        variant: "destructive"
      })
    }
  })
}

export function useCreateComment(postId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["commentPost", postId],
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["detailedPost", postId]
      })
      queryClient.invalidateQueries({
        queryKey: ["timeline"]
      })
      toast({
        title: "Sua reação foi gravada com sucesso! :)"
      })
    },
    onError: res => {
      toast({
        title: "Erro ao reagir à esta postagem!",
        description: res.response.data.message,
        variant: "destructive"
      })
    }
  })
}
