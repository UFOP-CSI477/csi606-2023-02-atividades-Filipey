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
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { FancyMultiSelect } from "@/components/ui/multi-select"
import { Textarea } from "@/components/ui/textarea"
import { useAuthStore } from "@/hooks/useAuth"
import { Check } from "lucide-react"
import {
  useAssignTagsToPost,
  useCreatePost
} from "network/services/Posts/mutations"
import { useCreateNewTag } from "network/services/Tags/mutations"
import { useFindAllTags } from "network/services/Tags/queries"
import { useState } from "react"
import { CreatePostDTO } from "types/Post/CreatePostDTO"
import { Tag } from "types/Tag/Tag"

export default function NewPostPage() {
  const { data: tags } = useFindAllTags()
  const { mutate: createPost } = useCreatePost()
  const { mutate: createTag } = useCreateNewTag()
  const { mutate: assignTagsToPost } = useAssignTagsToPost()
  const { data } = useAuthStore()

  const [newPost, setNewPost] = useState({} as CreatePostDTO)
  const [selectedTag, setSelectedTag] = useState<Tag[]>([])
  const [createNewTag, setCreateNewTag] = useState(false)
  const [newTagName, setNewTagName] = useState("")

  if (!tags) {
    return <div>Carregando...</div>
  }

  const handleSubmitNewPost = () => {
    createPost(
      {
        title: newPost.title,
        body: newPost.body,
        user_id: data!.userData.id
      },
      {
        onSuccess: data => {
          assignTagsToPost({
            ids: selectedTag.map(tag => tag.id),
            post_id: data.id
          })
        }
      }
    )
  }

  const handleCreateNewTag = () => {
    createTag({
      name: newTagName
    })
    setNewTagName("")
    setCreateNewTag(false)
  }

  return (
    <div className="flex h-full w-full justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Criação de um novo Post</CardTitle>
          <CardDescription>
            Preencha os campos para confirmar a criação do seu mais novo post!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex-col-1 space-y-4">
              <div>
                <Input
                  onChange={e =>
                    setNewPost({ ...newPost, title: e.target.value })
                  }
                  placeholder="Digite o título do post aqui."
                />
              </div>
              <div>
                <FancyMultiSelect
                  tags={tags}
                  selected={selectedTag}
                  setSelected={setSelectedTag}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={createNewTag}
                  onCheckedChange={() => setCreateNewTag(!createNewTag)}
                  id="newTag"
                />
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="newTag"
                >
                  Criar uma nova Tag
                </label>
              </div>
              {createNewTag && (
                <div className="flex items-center space-x-2">
                  <Input
                    onChange={e => setNewTagName(e.target.value)}
                    placeholder="Digite um nome para a Tag..."
                  />
                  <button
                    className="disabled:bg-gray-500 bg-green-500 disabled:hover:bg-gray-300 hover:bg-green-600 duration-200 rounded-lg"
                    disabled={newTagName === ""}
                    onClick={handleCreateNewTag}
                  >
                    <Check className="text-white" />
                  </button>
                </div>
              )}
              <div>
                <Textarea
                  onChange={e =>
                    setNewPost({ ...newPost, body: e.target.value })
                  }
                  placeholder="Digite o conteúdo do post aqui..."
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-end justify-end">
          <Button
            disabled={!newPost.body || !newPost.title}
            className="bg-green-700 hover:bg-green-800 duration-200 disabled:bg-gray-600"
            onClick={handleSubmitNewPost}
          >
            Confirmar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
