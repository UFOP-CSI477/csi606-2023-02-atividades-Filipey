"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { useAuthStore } from "@/hooks/useAuth"
import { useCreateComment } from "network/services/Posts/mutations"
import { useState } from "react"

interface NewCommentDialogProps {
  postId: number
  open: boolean
  onOpenChange: (state: boolean) => void
}

export function NewCommentDialog({
  postId,
  open,
  onOpenChange
}: NewCommentDialogProps) {
  const { data } = useAuthStore()
  const { mutate: createComment } = useCreateComment(postId)
  const [comment, setComment] = useState("")

  const handleSubmitComment = () => {
    createComment({
      body: comment,
      post_id: postId,
      user_id: data!.userData.id
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black">Novo comentário</DialogTitle>
          <DialogDescription>
            Preencha os campos obrigatórios para salvar seu comentário
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            onChange={e => setComment(e.target.value)}
            placeholder="Digite seu texto aqui."
            className="text-black"
          />
        </div>
        <DialogFooter>
          <Button
            className="bg-green-700 hover:bg-green-800 duration-200 disabled:bg-gray-600"
            disabled={!comment || comment === ""}
            onClick={handleSubmitComment}
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
