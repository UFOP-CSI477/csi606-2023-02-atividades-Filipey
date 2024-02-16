"use client"
import { PostCardAvatar } from "@/components/layout/post-card-avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuthStore } from "@/hooks/useAuth"
import {
  useUpdatePicture,
  useUpdateUsername
} from "network/services/Users/mutations"
import { ChangeEvent, useState } from "react"

type UpdatableProfile = {
  username: string
  picture: File | null
}

export default function ProfilePage() {
  const { data } = useAuthStore()
  const { mutate: updateUsername } = useUpdateUsername()
  const { mutate: updatePicture } = useUpdatePicture()

  const [profile, setProfile] = useState<UpdatableProfile>({
    username: data?.userData ? data.userData.username : "",
    picture: null
  })

  const handleChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfile({ ...profile, picture: e.target.files[0] })
    }
  }

  const handleUpdateChanges = () => {
    if (data?.userData && profile.username !== data.userData.username) {
      updateUsername({
        id: data.userData.id,
        data: {
          username: profile.username
        }
      })
    }

    if (data?.userData && profile.picture !== null) {
      updatePicture({
        id: data.userData.id,
        data: {
          file: profile.picture
        }
      })
    }

    setProfile({
      ...profile,
      picture: null
    })
  }

  return (
    <div className="flex h-full w-full justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Atualizar meu Perfil</CardTitle>
          <CardDescription>
            Atualize os campos caso queira alterá-los
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={e => e.preventDefault()}>
            <div className="flex-col-1 space-y-4">
              {data?.userData && (
                <div className="flex items-center justify-center">
                  <PostCardAvatar path={data.userData.picture_path} />
                </div>
              )}

              <div className="flex items-center justify-center -mt-2">
                <span className="font-semibold">{data?.userData.username}</span>
              </div>
              <div>
                <div className="flex text-center items-center justify-center mt-4 mb-1">
                  <Label className="text-center" htmlFor="user_picture">
                    Envie uma nova foto
                  </Label>
                </div>
                <Input
                  onChange={handleChangePicture}
                  id="user_picture"
                  type="file"
                  accept="image/*"
                />
              </div>
              <div>
                <div className="flex text-center items-center justify-center mt-4 mb-1">
                  <Label className="text-left" htmlFor="user_username">
                    Nome de Usuário
                  </Label>
                </div>

                <Input
                  onChange={e =>
                    setProfile({ ...profile, username: e.target.value })
                  }
                  value={profile.username}
                  id="user_username"
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <Button
                disabled={
                  data?.userData &&
                  profile.username === data.userData.username &&
                  profile.picture === null
                }
                onClick={handleUpdateChanges}
                className="bg-green-700 hover:bg-green-800 duration-200 disabled:bg-gray-600"
              >
                Confirmar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
