"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCreateUser } from "network/services/Users/mutations"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { CreateUserDTO } from "types/User/CreateUserDTO"
import { UserRoles } from "types/User/UserRoles"

export default function NewUserPage() {
  const [newUser, setNewUser] = useState<CreateUserDTO>({} as CreateUserDTO)
  const { mutate: createUser } = useCreateUser()

  const router = useRouter()

  const handleCreateUser = () => {
    createUser({
      username: newUser.username,
      password: newUser.password,
      role: UserRoles.NORMAL
    })
  }

  return (
    <div className="flex items-center justify-center my-4">
      <Card className="w-1/2 h-full">
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>
            Digite suas credencias para poder acessar o sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Digite seu username"
                  onChange={e =>
                    setNewUser({ ...newUser, username: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={e =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => router.push("/")} className="bg-sky-700">
            Voltar
          </Button>
          <Button
            disabled={!newUser.username || !newUser.password}
            className="bg-green-700"
            onClick={handleCreateUser}
          >
            Cadastrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
