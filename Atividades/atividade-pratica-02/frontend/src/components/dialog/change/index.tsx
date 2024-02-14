import { Button } from "@/components/ui/buttoncomponents"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialogcomponents"
import { ReactNode } from "react"

interface CreateEntityDialogProps {
  openState: boolean
  onOpenStateChange: (state: boolean) => void
  title: string
  children: ReactNode
  disabled?: boolean
  onConfirmAction: () => void
  type: "create" | "update"
}

export function HandleEntityDialog({
  openState,
  onOpenStateChange,
  title,
  children,
  type,
  disabled,
  onConfirmAction
}: CreateEntityDialogProps) {
  const isCreateDialog = type === "create"

  return (
    <Dialog open={openState} onOpenChange={onOpenStateChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isCreateDialog ? "Criação" : "Atualização"} de {title}
          </DialogTitle>
          <DialogDescription>
            {isCreateDialog
              ? "Preencha os campos para realizar o cadastro"
              : "Atualize os campos nos quais deseja salvar alterações"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>
        <DialogFooter>
          <Button
            className="bg-green-700 hover:bg-green-800 duration-200 disabled:bg-gray-600"
            disabled={disabled}
            onClick={onConfirmAction}
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
