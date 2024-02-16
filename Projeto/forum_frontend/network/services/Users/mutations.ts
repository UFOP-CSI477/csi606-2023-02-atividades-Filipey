import { toast } from "@/components/ui/use-toast"
import { useMutation } from "@tanstack/react-query"
import { createUser } from "network/services/Users"

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
