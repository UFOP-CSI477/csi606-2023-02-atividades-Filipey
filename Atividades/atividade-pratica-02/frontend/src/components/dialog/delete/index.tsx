import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialogcomponents"

interface DeleteAlertDialogProps {
  openState: boolean
  onOpenStateChange: (state: boolean) => void
  onCancelAction: () => void
  onConfirmAction: () => void
  entity: string
}

export function DeleteAlertDialog({
  openState,
  onOpenStateChange,
  onCancelAction,
  onConfirmAction,
  entity
}: DeleteAlertDialogProps) {
  return (
    <AlertDialog open={openState} onOpenChange={onOpenStateChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Ao deletar {entity}, não será possível recuperar este registro!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancelAction}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={onConfirmAction}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
