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
import { toast } from "@/components/ui/use-toast"
import { useAuthStore } from "@/hooks/useAuth"
import { useLogin } from "network/services/Auth/mutations"
import { useRouter } from "next/navigation"
import { useState } from "react"

type LoginData = {
  username: string
  password: string
}

export default function LoginPage() {
  const [user, setUser] = useState<LoginData>({} as LoginData)

  const { mutate: login } = useLogin()
  const { setData } = useAuthStore()
  const router = useRouter()

  const handleLogin = () => {
    if (user.username && user.password) {
      login(user, {
        onSuccess(data) {
          setData({
            userData: data.user,
            access_token: data.access_token
          })
          localStorage.setItem("access_token", data.access_token)
          localStorage.setItem("auth", "true")
          router.push("/home")
          toast({
            title: "Bem vindo!"
          })
        },
        onError() {
          toast({
            title: "Credenciais inválidas!",
            variant: "destructive"
          })
        }
      })
    }
  }

  return (
    <div className="flex items-center justify-center my-4">
      <Card className="w-1/2 h-full">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            É necessário a sua autenticação para acessar o sistema
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
                  onChange={e => setUser({ ...user, username: e.target.value })}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={e => setUser({ ...user, password: e.target.value })}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={() => router.push("/new_user")}
            className="bg-sky-700"
          >
            Me cadastrar
          </Button>
          <Button
            disabled={!user.username || !user.password}
            className="bg-green-700"
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
