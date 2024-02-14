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
import { useFindAllCities } from "@/network/services/cities/queriescomponents"
import {
  useCreateCollectPlace,
  useDeleteCollectPlace,
  useUpdateCollectPlace
} from "@/network/services/collectPlaces/mutationscomponents"
import { useFindAllCollectPlaces } from "@/network/services/collectPlaces/queriescomponents"
import { CollectPlace } from "@/types/CollectPlace/CollectPlacecomponents"
import { CreateCollectPlaceDTO } from "@/types/CollectPlace/CreateCollectPlaceDtocomponents"
import { UpdateCollectPlaceDTO } from "@/types/CollectPlace/UpdateCollectPlaceDtocomponents"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdDelete, MdOutlineUpdate } from "react-icons/md"

export default function CollectPlacesPage() {
  const { data: places } = useFindAllCollectPlaces()
  const { data: cities } = useFindAllCities()

  const { mutate: createPlace } = useCreateCollectPlace()
  const { mutate: updatePlace } = useUpdateCollectPlace()
  const { mutate: deletePlace } = useDeleteCollectPlace()

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)

  const [selectedPlace, setSelectedPlace] = useState<undefined | CollectPlace>()
  const [updatedPlace, setUpdatedPlace] = useState<
    undefined | UpdateCollectPlaceDTO
  >()
  const [newPlace, setNewPlace] = useState<CreateCollectPlaceDTO>(
    {} as CreateCollectPlaceDTO
  )

  const router = useRouter()

  const handleDeletePlace = () => {
    if (selectedPlace) {
      deletePlace(selectedPlace.id)
      setOpenDeleteDialog(false)
    }
  }

  const handleUpdatePlace = () => {
    if (selectedPlace && updatedPlace) {
      updatePlace({
        id: selectedPlace.id,
        data: updatedPlace
      })
      setUpdatedPlace({} as UpdateCollectPlaceDTO)
      setOpenUpdateDialog(false)
    }
  }

  const handleCreatePlace = () => {
    if (newPlace) {
      createPlace(newPlace)
      setNewPlace({} as CreateCollectPlaceDTO)
      setOpenCreateDialog(false)
    }
  }

  if (!cities || !places) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    )
  }

  const handleChangeCity = (cityId: string, context: "update" | "create") => {
    const newCity = cities.find(city => city.id === Number(cityId))
    if (newCity) {
      context === "update"
        ? setUpdatedPlace({ ...updatedPlace, city_id: newCity.id })
        : setNewPlace({ ...newPlace, city_id: newCity.id })
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
            <TableHead className="text-center">Nome</TableHead>
            <TableHead className="text-center">Cidade</TableHead>
            <TableHead className="text-center">Endereço</TableHead>
            <TableHead className="text-center">Data de Inserção</TableHead>
            <TableHead className="text-center">Última atualização</TableHead>
            <TableHead className="text-center">Atualizar</TableHead>
            <TableHead className="text-center">Excluir</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {places.map(place => (
            <TableRow className="text-center" key={place.id}>
              <TableCell>{place.id}</TableCell>
              <TableCell>{place.name}</TableCell>
              <TableCell>
                {cities.find(city => city.id === place.city_id)?.name}
              </TableCell>
              <TableCell>
                {place.street}, {place.complement} - {place.number}
              </TableCell>
              <TableCell>{convertStringDate(place.inserted_at)}</TableCell>
              <TableCell>{convertStringDate(place.updated_at)}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      setSelectedPlace(place)
                      setOpenUpdateDialog(true)
                      setUpdatedPlace({
                        city_id: place.city_id,
                        complement: place.complement,
                        name: place.name,
                        number: place.number,
                        street: place.street
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
                      setSelectedPlace(place)
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
        onConfirmAction={() => handleDeletePlace()}
        entity="este Local de Coleta"
      />

      {selectedPlace && updatedPlace && (
        <HandleEntityDialog
          openState={openUpdateDialog}
          onOpenStateChange={setOpenUpdateDialog}
          title="Local de Coleta"
          type="update"
          onConfirmAction={handleUpdatePlace}
          disabled={
            updatedPlace.name === selectedPlace.name &&
            updatedPlace.city_id === selectedPlace.city_id &&
            updatedPlace.complement === selectedPlace.complement &&
            updatedPlace.number === selectedPlace.number &&
            updatedPlace.street === selectedPlace.street
          }
        >
          <div>
            <div className="flex items-center space-x-4 my-4">
              <Label className="text-right" htmlFor="place_name">
                Nome
              </Label>
              <Input
                id="place_name"
                defaultValue={updatedPlace.name}
                className="col-span-3"
                onChange={e =>
                  setUpdatedPlace({ ...updatedPlace, name: e.target.value })
                }
              />
              <Label htmlFor="place_street" className="text-right">
                Rua
              </Label>
              <Input
                id="place_street"
                defaultValue={updatedPlace.street}
                className="col-span-3"
                onChange={e =>
                  setUpdatedPlace({ ...updatedPlace, street: e.target.value })
                }
              />
            </div>
            <div className="flex items-center space-x-4 my-4">
              <Label className="text-right" htmlFor="place_number">
                Número
              </Label>
              <Input
                id="place_number"
                defaultValue={updatedPlace.number}
                className="col-span-3"
                type="number"
                onChange={e =>
                  setUpdatedPlace({
                    ...updatedPlace,
                    number: Number(e.target.value)
                  })
                }
              />
              <Label htmlFor="place_complement" className="text-right">
                Complemento
              </Label>
              <Input
                id="place_complement"
                defaultValue={updatedPlace.complement}
                className="col-span-3"
                onChange={e =>
                  setUpdatedPlace({
                    ...updatedPlace,
                    complement: e.target.value
                  })
                }
              />
            </div>
            <div className="flex items-center space-x-2 my-4">
              <Label className="text-left" htmlFor="cities">
                Cidade
              </Label>
              <Select
                onValueChange={value => handleChangeCity(value, "update")}
              >
                <SelectTrigger id="cities">
                  <SelectValue
                    placeholder={
                      cities.find(c => c.id === selectedPlace.city_id)?.name
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Cidades</SelectLabel>
                    {cities.map(city => (
                      <SelectItem key={city.id} value={city.id.toString()}>
                        {city.name}
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
        title="Local de Coleta"
        type="create"
        onConfirmAction={handleCreatePlace}
        disabled={
          !newPlace.city_id ||
          !newPlace.complement ||
          !newPlace.name ||
          !newPlace.complement ||
          !newPlace.street ||
          !newPlace.number
        }
      >
        <div>
          <div className="flex items-center space-x-4 my-4">
            <Label className="text-right" htmlFor="place_name">
              Nome
            </Label>
            <Input
              id="place_name"
              defaultValue={newPlace.name}
              className="col-span-3"
              onChange={e => setNewPlace({ ...newPlace, name: e.target.value })}
            />
            <Label htmlFor="place_street" className="text-right">
              Rua
            </Label>
            <Input
              id="place_street"
              defaultValue={newPlace.street}
              className="col-span-3"
              onChange={e =>
                setNewPlace({ ...newPlace, street: e.target.value })
              }
            />
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Label className="text-right" htmlFor="place_number">
              Número
            </Label>
            <Input
              id="place_number"
              defaultValue={newPlace.number}
              className="col-span-3"
              type="number"
              onChange={e =>
                setNewPlace({
                  ...newPlace,
                  number: Number(e.target.value)
                })
              }
            />
            <Label htmlFor="place_complement" className="text-right">
              Complemento
            </Label>
            <Input
              id="place_complement"
              defaultValue={newPlace.complement}
              className="col-span-3"
              onChange={e =>
                setNewPlace({
                  ...newPlace,
                  complement: e.target.value
                })
              }
            />
          </div>
          <div className="flex items-center space-x-2 my-4">
            <Label className="text-left" htmlFor="cities">
              Cidade
            </Label>
            <Select onValueChange={value => handleChangeCity(value, "create")}>
              <SelectTrigger id="cities">
                <SelectValue placeholder="Selecione uma cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cidades</SelectLabel>
                  {cities.map(city => (
                    <SelectItem key={city.id} value={city.id.toString()}>
                      {city.name}
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
