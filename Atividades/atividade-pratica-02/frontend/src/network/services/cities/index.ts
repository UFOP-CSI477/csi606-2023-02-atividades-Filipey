import { removeUnusedOptionalParams } from "@/lib/utilscomponents"
import { SuccessResponse } from "@/network/SuccessResponsecomponents"
import { UpdatePayload } from "@/network/UpdatePayloadcomponents"
import { api } from "@/network/apicomponents"
import { City } from "@/types/City/Citycomponents"
import { CreateCityDTO } from "@/types/City/CreateCityDtocomponents"
import { UpdateCityDTO } from "@/types/City/UpdateCityDtocomponents"

export async function findAllCities(): Promise<City[]> {
  const response = await api.get("/cities")
  return response.data.data
}

export async function findCityById(id: number): Promise<City> {
  const response = await api.get(`/cities/${id}`)
  return response.data
}

export async function findCityByName(name: string): Promise<City[]> {
  const response = await api.get(`/cities/by_name/${name}`)
  return response.data.data
}

export async function createCity(
  payload: CreateCityDTO
): Promise<SuccessResponse<City>> {
  const response = await api.post("/cities", payload)
  return response.data
}

export async function deleteCity(id: number): Promise<SuccessResponse<City>> {
  const response = await api.delete(`/cities/${id}`)
  return response.data
}

export async function updateCity(
  payload: UpdatePayload<UpdateCityDTO>
): Promise<SuccessResponse<City>> {
  payload.data = removeUnusedOptionalParams(payload.data)
  const response = await api.put(`/cities/${payload.id}`, payload.data)
  return response.data
}
