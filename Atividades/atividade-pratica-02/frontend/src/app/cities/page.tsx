"use client"

import { HandleEntityDialog } from "@/components/dialog/changecomponents"
import { DeleteAlertDialog } from "@/components/dialog/deletecomponents"
import { Button } from "@/components/ui/buttoncomponents"
import { Input } from "@/components/ui/inputcomponents"
import { Label } from "@/components/ui/labelcomponents"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/selectcomponents"
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
import { convertStringDate } from "@/lib/utilscomponents"
import {
  useCreateCity,
  useDeleteCity,
  useUpdateCity
} from "@/network/services/cities/mutationscomponents"
import { useFindAllCities } from "@/network/services/cities/queriescomponents"
import { useFindAllStates } from "@/network/services/states/queriescomponents"
import { City } from "@/types/City/Citycomponents"
import { CreateCityDTO } from "@/types/City/CreateCityDtocomponents"
import { UpdateCityDTO } from "@/types/City/UpdateCityDtocomponents"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdDelete, MdOutlineUpdate } from "react-icons/md"

export default function CitiesPage() {
  const { data: cities } = useFindAllCities()
  const { data: states } = useFindAllStates()

  const { mutate: createCity } = useCreateCity()
  const { mutate: updateCity } = useUpdateCity()
  const { mutate: deleteCity } = useDeleteCity()

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)

  const [selectedCity, setSelectedCity] = useState<undefined | City>()
  const [updatedCity, setUpdatedCity] = useState<undefined | UpdateCityDTO>()
  const [newCity, setNewCity] = useState<CreateCityDTO>({} as CreateCityDTO)

  const router = useRouter()

  const handleDeleteCity = () => {
    if (selectedCity) {
      deleteCity(selectedCity.id)
      setOpenDeleteDialog(false)
    }
  }

  const handleUpdateCity = () => {
    if (selectedCity && updatedCity) {
      updateCity({
        id: selectedCity.id,
        data: updatedCity
      })
      setUpdatedCity({} as UpdateCityDTO)
      setOpenUpdateDialog(false)
    }
  }

  const handleCreateCity = () => {
    if (newCity) {
      createCity(newCity)
      setNewCity({} as CreateCityDTO)
      setOpenCreateDialog(false)
    }
  }

  if (!cities || !states) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    )
  }

  const handleChangeState = (stateId: string, context: "update" | "create") => {
    const newState = states.find(state => state.id === Number(stateId))
    if (newState) {
      context === "update"
        ? setUpdatedCity({ ...updatedCity, state_id: newState.id })
        : setNewCity({ ...newCity, state_id: newState.id })
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
        <TableCaption>Tabela para manusear as cidades</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Nome/Estado</TableHead>
            <TableHead className="text-center">Data de Inserção</TableHead>
            <TableHead className="text-center">Última atualização</TableHead>
            <TableHead className="text-center">Atualizar</TableHead>
            <TableHead className="text-center">Excluir</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cities.map(city => (
            <TableRow className="text-center" key={city.id}>
              <TableCell>{city.id}</TableCell>
              <TableCell>
                {city.name}/
                {states.find(state => state.id === city.state_id)?.acronym}
              </TableCell>
              <TableCell>{convertStringDate(city.inserted_at)}</TableCell>
              <TableCell>{convertStringDate(city.updated_at)}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      setSelectedCity(city)
                      setOpenUpdateDialog(true)
                      setUpdatedCity({
                        name: city.name,
                        state_id: city.state_id
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
                      setSelectedCity(city)
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
        onConfirmAction={() => handleDeleteCity()}
        entity="esta Cidade"
      />

      {selectedCity && updatedCity && (
        <HandleEntityDialog
          openState={openUpdateDialog}
          onOpenStateChange={setOpenUpdateDialog}
          title="Cidade"
          type="update"
          onConfirmAction={handleUpdateCity}
          disabled={
            updatedCity.name === selectedCity.name &&
            updatedCity.state_id === selectedCity.state_id
          }
        >
          <div>
            <div className="flex items-center space-x-4 my-4">
              <Label htmlFor="city_name" className="text-right">
                Nome
              </Label>
              <Input
                id="city_name"
                defaultValue={updatedCity.name}
                className="col-span-3 w-full"
                onChange={e =>
                  setUpdatedCity({ ...updatedCity, name: e.target.value })
                }
              />
            </div>
            <div className="flex items-center space-x-2 my-4">
              <Label className="text-left" htmlFor="states">
                Estado
              </Label>
              <Select
                onValueChange={value => handleChangeState(value, "update")}
              >
                <SelectTrigger id="states">
                  <SelectValue
                    placeholder={
                      states.find(s => s.id === selectedCity.state_id)?.name
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Estados</SelectLabel>
                    {states.map(state => (
                      <SelectItem value={state.id.toString()} key={state.id}>
                        {state.name} - {state.acronym}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </HandleEntityDialog>
      )}

      <HandleEntityDialog
        openState={openCreateDialog}
        onOpenStateChange={setOpenCreateDialog}
        type="create"
        title="Cidade"
        onConfirmAction={handleCreateCity}
        disabled={!newCity.name || !newCity.state_id}
      >
        <div>
          <div className="flex items-center space-x-4 my-4">
            <Label htmlFor="city_name" className="text-right">
              Nome
            </Label>
            <Input
              id="city_name"
              defaultValue={newCity.name}
              className="col-span-3 w-full"
              onChange={e => setNewCity({ ...newCity, name: e.target.value })}
            />
          </div>
          <div className="flex items-center space-x-2 my-4">
            <Label className="text-left" htmlFor="states">
              Estado
            </Label>
            <Select onValueChange={value => handleChangeState(value, "create")}>
              <SelectTrigger id="states">
                <SelectValue placeholder="Selecione um estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Estados</SelectLabel>
                  {states.map(state => (
                    <SelectItem value={state.id.toString()} key={state.id}>
                      {state.name} - {state.acronym}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </HandleEntityDialog>
    </div>
  )
}
