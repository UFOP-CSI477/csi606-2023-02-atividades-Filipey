"use client"

import { HandleEntityDialog } from "@/components/dialog/changecomponents"
import { DeleteAlertDialog } from "@/components/dialog/deletecomponents"
import { Button } from "@/components/ui/buttoncomponents"
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
  useCreateState,
  useDeleteState,
  useUpdateState
} from "@/network/services/states/mutationscomponents"
import { useFindAllStates } from "@/network/services/states/queriescomponents"
import { CreateStateDTO } from "@/types/State/CreateStateDtocomponents"
import { State } from "@/types/State/Statecomponents"
import { UpdateStateDTO } from "@/types/State/UpdateStateDtocomponents"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdDelete, MdOutlineUpdate } from "react-icons/md"
import { z } from "zod"

export default function StatesPage() {
  const { data: states } = useFindAllStates()

  const { mutate: createState } = useCreateState()
  const { mutate: updateState } = useUpdateState()
  const { mutate: deleteState } = useDeleteState()

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)

  const [selectedState, setSelectedState] = useState<undefined | State>()
  const [updatedState, setUpdatedState] = useState<undefined | UpdateStateDTO>()
  const [newState, setNewState] = useState<CreateStateDTO>({} as CreateStateDTO)

  const router = useRouter()

  const stateSchema = z.object({
    acronym: z
      .string()
      .min(2, "A sigla deve conter exatos 2 caracteres!")
      .max(2, "A sigla deve conter exatos 2 caracteres!"),
    name: z.string()
  })

  const handleDeleteState = () => {
    if (selectedState) {
      deleteState(selectedState.id)
      setOpenDeleteDialog(false)
    }
  }

  const handleUpdateState = () => {
    if (selectedState && updatedState) {
      try {
        stateSchema.parse(updatedState)
        updateState({
          id: selectedState.id,
          data: updatedState
        })
        setUpdatedState({} as UpdateStateDTO)
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

  const handleCreateState = () => {
    if (newState) {
      try {
        stateSchema.parse(newState)
        createState(newState)
        setNewState({} as CreateStateDTO)
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

  if (!states) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    )
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
        <TableCaption>Tabela para manusear as cidades</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Nome/Sigla</TableHead>
            <TableHead className="text-center">Data de Inserção</TableHead>
            <TableHead className="text-center">Última atualização</TableHead>
            <TableHead className="text-center">Atualizar</TableHead>
            <TableHead className="text-center">Excluir</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {states.map(state => (
            <TableRow className="text-center" key={state.id}>
              <TableCell>{state.id}</TableCell>
              <TableCell>
                {state.name}/{state.acronym}
              </TableCell>
              <TableCell>{convertStringDate(state.inserted_at)}</TableCell>
              <TableCell>{convertStringDate(state.updated_at)}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      setSelectedState(state)
                      setOpenUpdateDialog(true)
                      setUpdatedState({
                        name: state.name,
                        acronym: state.acronym
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
                      setSelectedState(state)
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

      <DeleteAlertDialog
        openState={openDeleteDialog}
        onOpenStateChange={setOpenDeleteDialog}
        onCancelAction={() => setOpenDeleteDialog(false)}
        onConfirmAction={() => handleDeleteState()}
        entity="este Estado"
      />

      {selectedState && updatedState && (
        <HandleEntityDialog
          openState={openUpdateDialog}
          onOpenStateChange={setOpenUpdateDialog}
          title="Estado"
          type="update"
          onConfirmAction={handleUpdateState}
          disabled={
            updatedState.name === selectedState.name &&
            updatedState.acronym === selectedState.acronym
          }
        >
          <div>
            <div className="flex items-center space-x-4 my-4">
              <Label className="text-right" htmlFor="state_name">
                Nome
              </Label>
              <Input
                id="state_name"
                defaultValue={updatedState.name}
                className="col-span-3"
                onChange={e =>
                  setUpdatedState({ ...updatedState, name: e.target.value })
                }
              />
            </div>
            <div className="flex items-center space-x-4 my-4">
              <Label className="text-right" htmlFor="state_acronym">
                Sigla
              </Label>
              <Input
                id="state_acronym"
                defaultValue={updatedState.acronym}
                className="col-span-3"
                onChange={e =>
                  setUpdatedState({ ...updatedState, acronym: e.target.value })
                }
              />
            </div>
          </div>
        </HandleEntityDialog>
      )}

      <HandleEntityDialog
        openState={openCreateDialog}
        onOpenStateChange={setOpenCreateDialog}
        title="Estado"
        type="create"
        onConfirmAction={handleCreateState}
        disabled={!newState.name || !newState.acronym}
      >
        <div>
          <div className="flex items-center space-x-4 my-4">
            <Label className="text-right" htmlFor="state_name">
              Nome
            </Label>
            <Input
              id="state_name"
              defaultValue={newState.name}
              className="col-span-3"
              onChange={e => setNewState({ ...newState, name: e.target.value })}
            />
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Label className="text-right" htmlFor="state_acronym">
              Sigla
            </Label>
            <Input
              id="state_acronym"
              defaultValue={newState.acronym}
              className="col-span-3"
              onChange={e =>
                setNewState({ ...newState, acronym: e.target.value })
              }
            />
          </div>
        </div>
      </HandleEntityDialog>
    </div>
  )
}
