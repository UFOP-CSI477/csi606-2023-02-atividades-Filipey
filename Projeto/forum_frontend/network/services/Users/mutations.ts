import { toast } from "@/components/ui/use-toast"
import { useAuthStore } from "@/hooks/useAuth"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  createUser,
  updateUserPicture,
  updateUsername
} from "network/services/Users"

export function useCreateUser() {
  return useMutation({
    mutationKey: ["createUser"],
    mutationFn: createUser,
    onSuccess: () => {
      toast({
        title: "Usuário criado com sucesso!",
        description: "Volte para tela inicial para acessar o sistema!"
      })
    },
    onError(error) {
      toast({
        title: "Erro ao criar usuário!",
        description: res.response.data.message,
        variant: "destructive"
      })
    }
  })
}

export function useUpdatePicture() {
  const { data: authData, setData } = useAuthStore()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateUserPicture,
    mutationKey: ["updateUserPicture"],
    onSuccess: data => {
      toast({
        title: "Foto de perfil atualizada com sucesso!"
      })
      setData({
        access_token: authData!.access_token,
        userData: {
          ...authData!.userData,
          picture_path: data.picture_path!
        }
      })
      queryClient.invalidateQueries()
    },
    onError: res => {
      toast({
        title: "Erro ao atualizar foto de perfil!",
        description: res.response.data.message,
        variant: "destructive"
      })
    }
  })
}

export function useUpdateUsername() {
  const { data: authData, setData } = useAuthStore()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateUsername,
    mutationKey: ["updateUsername"],
    onSuccess: data => {
      toast({
        title: "Username atualizado com sucesso!"
      })
      setData({
        access_token: authData!.access_token,
        userData: {
          ...authData!.userData,
          username: data!.username
        }
      })
      queryClient.invalidateQueries()
    },
    onError: res => {
      toast({
        title: "Erro ao atualizar foto de perfil!",
        description: res.response.data.message,
        variant: "destructive"
      })
    }
  })
}
