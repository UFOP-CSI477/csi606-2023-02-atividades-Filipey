"use client"
import { HandleEntityDialog } from "@/components/dialog/changecomponents"
import { DeleteAlertDialog } from "@/components/dialog/deletecomponents"
import { Button } from "@/components/ui/buttoncomponents"
import { Calendar } from "@/components/ui/calendarcomponents"
import { Label } from "@/components/ui/labelcomponents"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popovercomponents"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger
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
import {
  cn,
  convertDateToString,
  convertStringDate
} from "@/lib/utilscomponents"
import { useFindAllCollectPlaces } from "@/network/services/collectPlaces/queriescomponents"
import {
  useCreateDonation,
  useDeleteDonation,
  useUpdateDonation
} from "@/network/services/donations/mutationscomponents"
import { useFindAllDonations } from "@/network/services/donations/queriescomponents"
import { useFindAllPersons } from "@/network/services/persons/queriescomponents"
import { CreateDonationDTO } from "@/types/Donation/CreateDonationDtocomponents"
import { Donation } from "@/types/Donation/Donationcomponents"
import { UpdateDonationDTO } from "@/types/Donation/UpdateDonationDtocomponents"
import { SelectGroup, SelectValue } from "@radix-ui/react-select"
import { format, parseISO } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { MdDelete, MdOutlineUpdate } from "react-icons/md"

export default function BloodDonationsPage() {
  const { data, isLoading } = useFindAllDonations()
  const { data: persons } = useFindAllPersons()
  const { data: collectPlaces } = useFindAllCollectPlaces()

  const { mutate: deleteDonation } = useDeleteDonation()
  const { mutate: updateDonation } = useUpdateDonation()
  const { mutate: createDonation } = useCreateDonation()

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
  const [openCreateDialog, setOpenCreateDialog] = useState(false)

  const [selectedDonation, setSelectedDonation] = useState<
    undefined | Donation
  >(undefined)
  const [updatedDonation, setUpdatedDonation] = useState<
    undefined | UpdateDonationDTO
  >(undefined)
  const [newDonation, setNewDonation] = useState<CreateDonationDTO>(
    {} as CreateDonationDTO
  )

  const router = useRouter()

  if (isLoading || !persons || !collectPlaces || !data) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    )
  }

  const handleChangeDonator = (
    donatorId: string,
    context: "update" | "create"
  ) => {
    const newDonator = persons.find(p => p.id === Number(donatorId))
    if (newDonator)
      context === "update"
        ? setUpdatedDonation({ ...updatedDonation, person_id: newDonator.id })
        : setNewDonation({ ...newDonation, person_id: newDonator.id })
  }

  const handleChangeCollectPlace = (
    placeId: string,
    context: "update" | "create"
  ) => {
    const newPlace = collectPlaces.find(p => p.id === Number(placeId))
    if (newPlace)
      context === "update"
        ? setUpdatedDonation({
            ...updatedDonation,
            collect_place_id: newPlace.id
          })
        : setNewDonation({ ...newDonation, collect_place_id: newPlace.id })
  }

  const handleChangeDate = (
    date: Date | undefined,
    context: "update" | "create"
  ) => {
    if (date)
      context === "update"
        ? setUpdatedDonation({
            ...updatedDonation,
            date: convertDateToString(date)
          })
        : setNewDonation({ ...newDonation, date: convertDateToString(date) })
  }

  const handleDeleteDonation = () => {
    if (selectedDonation) {
      deleteDonation(selectedDonation.id)
      setOpenDeleteDialog(false)
    }
  }

  const handleUpdateDonation = () => {
    if (selectedDonation && updatedDonation) {
      updateDonation({
        id: selectedDonation.id,
        data: updatedDonation
      })
      setUpdatedDonation({} as UpdateDonationDTO)
      setOpenUpdateDialog(false)
    }
  }

  const handleCreateDonation = () => {
    if (newDonation) {
      createDonation(newDonation)
      setNewDonation({} as CreateDonationDTO)
      setOpenCreateDialog(false)
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
        <TableCaption>Tabela para manusear as doações</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Data de realização</TableHead>
            <TableHead className="text-center">Doador</TableHead>
            <TableHead className="text-center">Local</TableHead>
            <TableHead className="text-center">Data de Inserção</TableHead>
            <TableHead className="text-center">Última atualização</TableHead>
            <TableHead className="text-center">Atualizar</TableHead>
            <TableHead className="text-center">Excluir</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(donation => (
            <TableRow className="text-center" key={donation.id}>
              <TableCell>{donation.id}</TableCell>
              <TableCell>
                {format(parseISO(donation.date), "dd/MM/yyyy")}
              </TableCell>
              <TableCell>
                {persons.find(person => person.id === donation.person_id)?.name}
              </TableCell>
              <TableCell>
                {
                  collectPlaces.find(
                    place => place.id === donation.collect_place_id
                  )?.name
                }
              </TableCell>
              <TableCell>{convertStringDate(donation.inserted_at)}</TableCell>
              <TableCell>{convertStringDate(donation.updated_at)}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      setSelectedDonation(donation)
                      setOpenUpdateDialog(true)
                      setUpdatedDonation({
                        collect_place_id: donation.collect_place_id,
                        date: donation.date,
                        person_id: donation.person_id
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
                      setSelectedDonation(donation)
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
        onConfirmAction={() => handleDeleteDonation()}
        entity="esta Doação"
      />

      {selectedDonation && updatedDonation && (
        <HandleEntityDialog
          openState={openUpdateDialog}
          onOpenStateChange={setOpenUpdateDialog}
          title="Doação"
          type="update"
          onConfirmAction={handleUpdateDonation}
          disabled={
            updatedDonation.collect_place_id ===
              selectedDonation.collect_place_id &&
            updatedDonation.person_id === selectedDonation.person_id &&
            updatedDonation.date === selectedDonation.date
          }
        >
          <div>
            <div className="flex items-center space-x-4 my-4">
              <Label className="text-left" htmlFor="donator">
                Doador
              </Label>
              <Select
                onValueChange={value => handleChangeDonator(value, "update")}
              >
                <SelectTrigger id="donator">
                  <SelectValue
                    placeholder={
                      persons.find(p => p.id === selectedDonation.person_id)
                        ?.name
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Doadores</SelectLabel>
                    {persons.map(person => (
                      <SelectItem key={person.id} value={person.id.toString()}>
                        {person.name} ({person.rg})
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center">
              <Label className="text-left -mr-6" htmlFor="collect_place">
                Local de Coleta
              </Label>
              <Select
                onValueChange={value =>
                  handleChangeCollectPlace(value, "update")
                }
              >
                <SelectTrigger id="collect_place">
                  <SelectValue
                    placeholder={
                      collectPlaces.find(
                        cp => cp.id === selectedDonation.collect_place_id
                      )?.name
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Local de Coleta</SelectLabel>
                    {collectPlaces.map(place => (
                      <SelectItem key={place.id} value={place.id.toString()}>
                        {place.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-4 my-4">
              <Label className="text-left" htmlFor="donation_date">
                Data de doação
              </Label>
              <div className="">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="donation_date"
                      variant={"outline"}
                      className="w-[280px] justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(parseISO(updatedDonation.date!), "dd/MM/yyyy")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      onSelect={value => handleChangeDate(value, "update")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </HandleEntityDialog>
      )}

      <HandleEntityDialog
        openState={openCreateDialog}
        onOpenStateChange={setOpenCreateDialog}
        type="create"
        title="Doação"
        onConfirmAction={handleCreateDonation}
        disabled={
          !newDonation.collect_place_id ||
          !newDonation.date ||
          !newDonation.person_id
        }
      >
        <div>
          <div className="flex items-center space-x-4 my-4">
            <Label className="text-left" htmlFor="donator">
              Doador
            </Label>
            <Select
              onValueChange={value => handleChangeDonator(value, "create")}
            >
              <SelectTrigger id="donator">
                <SelectValue placeholder={"Selecione um doador"} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Doadores</SelectLabel>
                  {persons.map(person => (
                    <SelectItem key={person.id} value={person.id.toString()}>
                      {person.name} ({person.rg})
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center">
            <Label className="text-left -mr-6" htmlFor="collect_place">
              Local de Coleta
            </Label>
            <Select
              onValueChange={value => handleChangeCollectPlace(value, "create")}
            >
              <SelectTrigger id="collect_place">
                <SelectValue placeholder="Selecione um local de coleta" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Local de Coleta</SelectLabel>
                  {collectPlaces.map(place => (
                    <SelectItem key={place.id} value={place.id.toString()}>
                      {place.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-4 my-4">
            <Label className="text-left" htmlFor="donation_date">
              Data de doação
            </Label>
            <div className="">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="donation_date"
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !newDonation.date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {newDonation.date ? (
                      format(parseISO(newDonation.date), "dd/MM/yyyy")
                    ) : (
                      <span>Selecione uma data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    onSelect={value => handleChangeDate(value, "create")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </HandleEntityDialog>
    </div>
  )
}
