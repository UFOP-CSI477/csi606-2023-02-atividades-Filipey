"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/hooks/useAuth"
import { HelpCircle, LogOutIcon } from "lucide-react"
import { useFindImageByPath } from "network/services/Assets/queries"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()
  const { data: authData, setData } = useAuthStore()
  const { data: image } = useFindImageByPath(authData!.userData.picture_path)

  const handleLogout = () => {
    localStorage.setItem("acess_token", "")
    router.push("/")
  }

  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <Link
          href={"/home"}
          className="hidden items-center justify-between gap-2 md:flex text-white"
        >
          <HelpCircle className="h-6 w-6 text-white" />
          <h1 className="text-lg font-semibold">
            How should i do? - Trabalho Prático Sistemas Web I
          </h1>
        </Link>
        <div className="flex items-center gap-2 justify-between">
          {image && (
            <Avatar>
              <AvatarImage src={image} />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          )}
          <Button onClick={handleLogout} size="sm">
            <LogOutIcon />
          </Button>
        </div>
      </nav>
    </div>
  )
}
