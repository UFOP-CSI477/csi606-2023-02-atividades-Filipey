import { removeUnusedOptionalParams } from "@/lib/utilscomponents"
import { SuccessResponse } from "@/network/SuccessResponsecomponents"
import { UpdatePayload } from "@/network/UpdatePayloadcomponents"
import { api } from "@/network/apicomponents"
import { CreatePersonDTO } from "@/types/Person/CreatePersonDtocomponents"
import { Person } from "@/types/Person/Personcomponents"
import { UpdatePersonDTO } from "@/types/Person/UpdatePersonDtocomponents"

export async function findAllPersons(): Promise<Person[]> {
  const response = await api.get("/persons")
  return response.data.data
}

export async function findPersonById(id: number): Promise<Person> {
  const response = await api.get(`/persons/${id}`)
  return response.data
}

export async function findPersonByName(name: string): Promise<Person[]> {
  const response = await api.get(`/persons/by_name/${name}`)
  return response.data.data
}

export async function createPerson(
  payload: CreatePersonDTO
): Promise<SuccessResponse<Person>> {
  const response = await api.post("/persons", payload)
  return response.data
}

export async function deletePerson(
  id: number
): Promise<SuccessResponse<Person>> {
  const response = await api.delete(`/persons/${id}`)
  return response.data
}

export async function updatePerson(
  payload: UpdatePayload<UpdatePersonDTO>
): Promise<SuccessResponse<Person>> {
  payload.data = removeUnusedOptionalParams(payload.data)
  const response = await api.put(`/persons/${payload.id}`, payload.data)
  return response.data
}
