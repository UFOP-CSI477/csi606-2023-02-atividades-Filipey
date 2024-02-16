import { toast } from "@/components/ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createComment } from "network/services/Comments"
import {
  assignTagsToPost,
  createPost,
  likePost,
  reactToPost,
  unlikePost
} from "network/services/Posts"

export function useCreatePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["createPost"],
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["timeline"]
      })
      toast({
        title: "Seu post foi salvo!"
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
        title: "Seu comentário foi salvo com sucesso! :)"
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

export function useAssignTagsToPost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["assignTagsToPost"],
    mutationFn: assignTagsToPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["timeline"]
      })
      toast({
        title: "As tags foram assimiladas corretamente! :)"
      })
    },
    onError: res => {
      toast({
        title: "Erro ao assinalar tags à esta postagem!",
        description: res.response.data.message,
        variant: "destructive"
      })
    }
  })
}
