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
import { useFindAllBloodTypes } from "@/network/services/bloodTypes/queriescomponents"
import { useFindAllCities } from "@/network/services/cities/queriescomponents"
import {
  useCreatePerson,
  useDeletePerson,
  useUpdatePerson
} from "@/network/services/persons/mutationscomponents"
import { useFindAllPersons } from "@/network/services/persons/queriescomponents"
import { CreatePersonDTO } from "@/types/Person/CreatePersonDtocomponents"
import { Person } from "@/types/Person/Personcomponents"
import { UpdatePersonDTO } from "@/types/Person/UpdatePersonDtocomponents"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdDelete, MdOutlineUpdate } from "react-icons/md"

export default function PersonsPage() {
  const { data: persons } = useFindAllPersons()
  const { data: bloodTypes } = useFindAllBloodTypes()
  const { data: cities } = useFindAllCities()

  const { mutate: createPerson } = useCreatePerson()
  const { mutate: updatePerson } = useUpdatePerson()
  const { mutate: deletePerson } = useDeletePerson()

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)

  const [selectedPerson, setSelectedPerson] = useState<undefined | Person>()
  const [updatedPerson, setUpdatedPerson] = useState<
    undefined | UpdatePersonDTO
  >()
  const [newPerson, setNewPerson] = useState<CreatePersonDTO>(
    {} as CreatePersonDTO
  )

  const router = useRouter()

  const handleDeletePerson = () => {
    if (selectedPerson) {
      deletePerson(selectedPerson.id)
      setOpenDeleteDialog(false)
    }
  }

  const handleUpdatePerson = () => {
    if (selectedPerson && updatedPerson) {
      updatePerson({
        id: selectedPerson.id,
        data: updatedPerson
      })
      setUpdatedPerson({} as UpdatePersonDTO)
      setOpenUpdateDialog(false)
    }
  }

  const handleCreatePerson = () => {
    if (newPerson) {
      createPerson(newPerson)
      setNewPerson({} as CreatePersonDTO)
      setOpenCreateDialog(false)
    }
  }

  if (!persons || !bloodTypes || !cities) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    )
  }

  const handleChangeBloodType = (
    bloodTypeId: string,
    context: "update" | "create"
  ) => {
    const newBt = bloodTypes.find(bt => bt.id === Number(bloodTypeId))
    if (newBt) {
      context === "update"
        ? setUpdatedPerson({ ...updatedPerson, blood_type_id: newBt.id })
        : setNewPerson({ ...newPerson, blood_type_id: newBt.id })
    }
  }

  const handleChangeCity = (cityId: string, context: "update" | "create") => {
    const newCity = cities.find(city => city.id === Number(cityId))
    if (newCity) {
      context === "update"
        ? setUpdatedPerson({ ...updatedPerson, city_id: newCity.id })
        : setNewPerson({ ...newPerson, city_id: newCity.id })
    }
  }

  const findPersonBloodType = (bloodTypeId: number) => {
    const newBt = bloodTypes.find(bt => bt.id === Number(bloodTypeId))
    return `${newBt?.type}${newBt?.factor}`
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
        <TableCaption>Tabela para manusear os doadores de sangue</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Nome</TableHead>
            <TableHead className="text-center">Tipo Sanguíneo</TableHead>
            <TableHead className="text-center">RG</TableHead>
            <TableHead className="text-center">Cidade</TableHead>
            <TableHead className="text-center">Endereço</TableHead>
            <TableHead className="text-center">Data de Inserção</TableHead>
            <TableHead className="text-center">Última atualização</TableHead>
            <TableHead className="text-center">Atualizar</TableHead>
            <TableHead className="text-center">Excluir</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {persons.map(person => (
            <TableRow className="text-center" key={person.id}>
              <TableCell>{person.id}</TableCell>
              <TableCell>{person.name}</TableCell>
              <TableCell>{findPersonBloodType(person.blood_type_id)}</TableCell>
              <TableCell>{person.rg}</TableCell>
              <TableCell>
                {cities.find(city => city.id === person.city_id)?.name}
              </TableCell>
              <TableCell>
                {person.street}, {person.complement} - {person.number}
              </TableCell>
              <TableCell>{convertStringDate(person.inserted_at)}</TableCell>
              <TableCell>{convertStringDate(person.updated_at)}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      setSelectedPerson(person)
                      setOpenUpdateDialog(true)
                      setUpdatedPerson({
                        city_id: person.city_id,
                        complement: person.complement,
                        name: person.name,
                        number: person.number,
                        street: person.street,
                        blood_type_id: person.blood_type_id,
                        rg: person.rg
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
                      setSelectedPerson(person)
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
        onConfirmAction={() => handleDeletePerson()}
        entity="este Doador"
      />

      {selectedPerson && updatedPerson && (
        <HandleEntityDialog
          openState={openUpdateDialog}
          onOpenStateChange={setOpenUpdateDialog}
          title="Doador"
          type="update"
          onConfirmAction={handleUpdatePerson}
          disabled={
            updatedPerson.blood_type_id === selectedPerson.blood_type_id &&
            updatedPerson.city_id === selectedPerson.city_id &&
            updatedPerson.complement === selectedPerson.complement &&
            updatedPerson.name === selectedPerson.name &&
            updatedPerson.number === selectedPerson.number &&
            updatedPerson.rg === selectedPerson.rg &&
            updatedPerson.street === selectedPerson.street
          }
        >
          <div>
            <div className="flex items-center space-x-4 my-4">
              <Label className="text-right" htmlFor="person_name">
                Nome
              </Label>
              <Input
                id="person_name"
                defaultValue={updatedPerson.name}
                className="col-span-3"
                onChange={e =>
                  setUpdatedPerson({ ...updatedPerson, name: e.target.value })
                }
              />
              <Label htmlFor="person_street" className="text-right">
                Rua
              </Label>
              <Input
                id="person_street"
                defaultValue={updatedPerson.street}
                className="col-span-3"
                onChange={e =>
                  setUpdatedPerson({ ...updatedPerson, street: e.target.value })
                }
              />
            </div>
            <div className="flex items-center space-x-4 my-4">
              <Label className="text-right" htmlFor="person_number">
                Número
              </Label>
              <Input
                id="person_number"
                defaultValue={updatedPerson.number}
                className="col-span-3"
                type="number"
                onChange={e =>
                  setUpdatedPerson({
                    ...updatedPerson,
                    number: Number(e.target.value)
                  })
                }
              />
              <Label htmlFor="person_complement" className="text-right">
                Complemento
              </Label>
              <Input
                id="person_complement"
                defaultValue={updatedPerson.complement}
                className="col-span-3"
                onChange={e =>
                  setUpdatedPerson({
                    ...updatedPerson,
                    complement: e.target.value
                  })
                }
              />
            </div>
            <div className="flex items-center space-x-9 my-4">
              <Label htmlFor="person_rg" className="text-right">
                RG
              </Label>
              <Input
                id="person_rg"
                defaultValue={updatedPerson.rg}
                className="col-span-3 pl-4"
                onChange={e =>
                  setUpdatedPerson({
                    ...updatedPerson,
                    rg: e.target.value
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
                      cities.find(c => c.id === selectedPerson.city_id)?.name
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
            <div className="flex items-center space-x-2 my-4">
              <Label className="text-left" htmlFor="blood_types">
                Tipo Sanguíneo
              </Label>
              <Select
                onValueChange={value => handleChangeBloodType(value, "update")}
              >
                <SelectTrigger id="blood_types">
                  <SelectValue
                    placeholder={findPersonBloodType(
                      selectedPerson.blood_type_id
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipos Sanguíneos</SelectLabel>
                    {bloodTypes.map(bloodType => (
                      <SelectItem
                        key={bloodType.id}
                        value={bloodType.id.toString()}
                      >
                        {bloodType.type}
                        {bloodType.factor}
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
        title="Doador"
        type="create"
        onConfirmAction={handleCreatePerson}
        disabled={
          !newPerson.blood_type_id ||
          !newPerson.city_id ||
          !newPerson.complement ||
          !newPerson.name ||
          !newPerson.number ||
          !newPerson.rg ||
          !newPerson.street
        }
      >
        <div>
          <div className="flex items-center space-x-4 my-4">
            <Label className="text-right" htmlFor="person_name">
              Nome
            </Label>
            <Input
              id="person_name"
              defaultValue={newPerson.name}
              className="col-span-3"
              onChange={e =>
                setNewPerson({ ...newPerson, name: e.target.value })
              }
            />
            <Label htmlFor="person_street" className="text-right">
              Rua
            </Label>
            <Input
              id="person_street"
              defaultValue={newPerson.street}
              className="col-span-3"
              onChange={e =>
                setNewPerson({ ...newPerson, street: e.target.value })
              }
            />
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Label className="text-right" htmlFor="person_number">
              Número
            </Label>
            <Input
              id="person_number"
              defaultValue={newPerson.number}
              className="col-span-3"
              type="number"
              onChange={e =>
                setNewPerson({
                  ...newPerson,
                  number: Number(e.target.value)
                })
              }
            />
            <Label htmlFor="person_complement" className="text-right">
              Complemento
            </Label>
            <Input
              id="person_complement"
              defaultValue={newPerson.complement}
              className="col-span-3"
              onChange={e =>
                setNewPerson({
                  ...newPerson,
                  complement: e.target.value
                })
              }
            />
          </div>
          <div className="flex items-center space-x-9 my-4">
            <Label htmlFor="person_rg" className="text-right">
              RG
            </Label>
            <Input
              id="person_rg"
              defaultValue={newPerson.rg}
              className="col-span-3 pl-4"
              onChange={e =>
                setNewPerson({
                  ...newPerson,
                  rg: e.target.value
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
          <div className="flex items-center space-x-2 my-4">
            <Label className="text-left" htmlFor="blood_types">
              Tipo Sanguíneo
            </Label>
            <Select
              onValueChange={value => handleChangeBloodType(value, "create")}
            >
              <SelectTrigger id="blood_types">
                <SelectValue placeholder="Selecione um Tipo Sanguíneo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tipos Sanguíneos</SelectLabel>
                  {bloodTypes.map(bloodType => (
                    <SelectItem
                      key={bloodType.id}
                      value={bloodType.id.toString()}
                    >
                      {bloodType.type}
                      {bloodType.factor}
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
