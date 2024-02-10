"use client"
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
import { Button } from "@/components/ui/buttoncomponents"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialogcomponents"
import { Input } from "@/components/ui/inputcomponents"
import { Label } from "@/components/ui/labelcomponents"
import { Skeleton } from "@/components/ui/skeletoncomponents"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/tablecomponents"
import { toast } from "@/components/ui/use-toastcomponents"
import { convertStringDate } from "@/lib/utilscomponents"
import {
  useCreateBloodType,
  useDeleteBloodType,
  useUpdateBloodType
} from "@/network/services/bloodTypes/mutationscomponents"
import { useFindAllBloodTypes } from "@/network/services/bloodTypes/queriescomponents"
import { BloodType } from "@/types/BloodType/BloodTypecomponents"
import { CreateBloodTypeDTO } from "@/types/BloodType/CreateBloodTypeDtocomponents"
import { UpdateBloodTypeDTO } from "@/types/BloodType/UpdateBloodTypeDtocomponents"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdDelete, MdOutlineUpdate } from "react-icons/md"
import { z } from "zod"

export default function BloodTypesPage() {
  const { data, isLoading } = useFindAllBloodTypes()
  const { mutate: deleteBloodType } = useDeleteBloodType()
  const { mutate: updateBloodType } = useUpdateBloodType()
  const { mutate: createBloodType } = useCreateBloodType()

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)

  const [selectedBt, setSelectedBt] = useState<undefined | BloodType>(undefined)
  const [updatedBt, setUpdatedBt] = useState<undefined | UpdateBloodTypeDTO>(
    undefined
  )
  const [newBt, setNewBt] = useState<CreateBloodTypeDTO>(
    {} as CreateBloodTypeDTO
  )

  const router = useRouter()

  const bloodTypeSchema = z.object({
    type: z
      .string()
      .min(1, "O Tipo deve possuir 1 caractere! ")
      .max(1, "O Tipo deve possuir 1 caractere! "),
    factor: z.string().regex(/^[+-]$/, "O fator deve ser '-' ou '+'! ")
  })

  if (isLoading || !data) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    )
  }

  const handleDeleteBloodType = () => {
    if (selectedBt) {
      deleteBloodType(selectedBt.id)
      setOpenDeleteDialog(false)
    }
  }

  const handleUpdateBloodType = () => {
    if (selectedBt && updatedBt) {
      try {
        bloodTypeSchema.parse(updatedBt)
        updateBloodType({
          id: selectedBt.id,
          data: updatedBt
        })
        toast({
          title: "Conteúdo atualizado com sucesso!",
          description: "O tipo sanguíneo foi atualizado com sucesso."
        })
        setOpenUpdateDialog(false)
      } catch (error) {
        if (error instanceof z.ZodError) {
          const errorMessages = error.errors.map(err => err.message)
          toast({
            title: "Erro durante validação dos campos!",
            description: errorMessages,
            variant: "destructive"
          })
        }
      }
    }
  }

  const handleCreateBloodType = () => {
    if (newBt) {
      try {
        bloodTypeSchema.parse(newBt)
        createBloodType(newBt)
        setNewBt({} as CreateBloodTypeDTO)
        setOpenCreateDialog(false)
      } catch (error) {
        if (error instanceof z.ZodError) {
          const errorMessages = error.errors.map(err => err.message)
          toast({
            title: "Erro durante validação dos campos!",
            description: errorMessages,
            variant: "destructive"
          })
        }
      }
    }
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center justify-start mb-4">
          <Button onClick={() => router.push("/")}>
            Voltar ao menu principal
          </Button>
        </div>
        <div className="flex items-end justify-end mb-4">
          <Button
            onClick={() => setOpenCreateDialog(true)}
            className="text-green-300 bg-green-800 hover:bg-green-900 duration-200"
          >
            Adicionar novo
          </Button>
        </div>
      </div>
      <Table className="border border-zinc-400">
        <TableCaption>Tabela para manusear os tipos sanguíneos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Tipo e Fator</TableHead>
            <TableHead className="text-center">Data de Inserção</TableHead>
            <TableHead className="text-center">Última atualização</TableHead>
            <TableHead className="text-center">Atualizar</TableHead>
            <TableHead className="text-center">Excluir</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(bloodType => (
            <TableRow className="text-center" key={bloodType.id}>
              <TableCell>{bloodType.id}</TableCell>
              <TableCell>
                {bloodType.type}
                {bloodType.factor}
              </TableCell>
              <TableCell>{convertStringDate(bloodType.inserted_at)}</TableCell>
              <TableCell>{convertStringDate(bloodType.updated_at)}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      setSelectedBt(bloodType)
                      setOpenUpdateDialog(true)
                      setUpdatedBt({
                        factor: bloodType.factor,
                        type: bloodType.type
                      })
                    }}
                  >
                    <MdOutlineUpdate
                      className="text-blue-500 hover:cursor-pointer hover:text-blue-700 duration-200"
                      size={20}
                    />
                  </button>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      setSelectedBt(bloodType)
                      setOpenDeleteDialog(true)
                    }}
                  >
                    <MdDelete
                      className="text-red-500 hover:cursor-pointer hover:text-red-700 duration-200"
                      size={20}
                    />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AlertDialog open={openDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Ao deletar este Tipo Sanguíneo, não será possível recuperar este
              registro!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenDeleteDialog(false)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDeleteBloodType()}>
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {selectedBt && updatedBt && (
        <Dialog onOpenChange={setOpenUpdateDialog} open={openUpdateDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Atualização de Tipo Sanguíneo</DialogTitle>
              <DialogDescription>
                Atualize os campos nos quais deseja salvar alterações
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  Tipo
                </Label>
                <Input
                  id="type"
                  defaultValue={updatedBt?.type}
                  className="col-span-3"
                  onChange={e =>
                    setUpdatedBt({
                      ...updatedBt,
                      type: e.target.value
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="factor" className="text-right">
                  Fator
                </Label>
                <Input
                  id="factor"
                  defaultValue={updatedBt?.factor}
                  className="col-span-3"
                  onChange={e =>
                    setUpdatedBt({
                      ...updatedBt,
                      factor: e.target.value
                    })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleUpdateBloodType}
                disabled={
                  (updatedBt.factor === selectedBt.factor &&
                    updatedBt.type === selectedBt.type) ||
                  updatedBt.factor === "" ||
                  updatedBt.type === ""
                }
              >
                Confirmar mudanças
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      <Dialog open={openCreateDialog} onOpenChange={setOpenCreateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criação de Tipo Sanguíneo</DialogTitle>
            <DialogDescription>
              Preencha os campos para realizar o cadastro
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Tipo
              </Label>
              <Input
                required
                id="type"
                defaultValue=""
                className="col-span-3"
                onChange={e =>
                  setNewBt({
                    ...newBt,
                    type: e.target.value
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="factor" className="text-right">
                Fator
              </Label>
              <Input
                required
                id="factor"
                defaultValue=""
                className="col-span-3"
                onChange={e => {
                  setNewBt({
                    ...newBt,
                    factor: e.target.value
                  })
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              disabled={!newBt || !newBt.factor || !newBt.type}
              onClick={handleCreateBloodType}
            >
              Criar novo Tipo Sanguíneo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
