import { removeUnusedOptionalParams } from "@/lib/utilscomponents"
import { SuccessResponse } from "@/network/SuccessResponsecomponents"
import { UpdatePayload } from "@/network/UpdatePayloadcomponents"
import { api } from "@/network/apicomponents"
import { CollectPlace } from "@/types/CollectPlace/CollectPlacecomponents"
import { CreateCollectPlaceDTO } from "@/types/CollectPlace/CreateCollectPlaceDtocomponents"
import { UpdateCollectPlaceDTO } from "@/types/CollectPlace/UpdateCollectPlaceDtocomponents"

export async function findAllCollectPlaces(): Promise<CollectPlace[]> {
  const response = await api.get("/collect_places")
  return response.data.data
}

export async function findCollectPlaceById(id: number): Promise<CollectPlace> {
  const response = await api.get(`/collect_places/${id}`)
  return response.data
}

export async function findCollectPlaceByName(
  name: string
): Promise<CollectPlace[]> {
  const response = await api.get(`/collect_places/by_name/${name}`)
  return response.data.data
}

export async function createCollectPlace(
  payload: CreateCollectPlaceDTO
): Promise<SuccessResponse<CollectPlace>> {
  const response = await api.post("/collect_places", payload)
  return response.data
}

export async function deleteCollectPlace(
  id: number
): Promise<SuccessResponse<CollectPlace>> {
  const response = await api.delete(`/collect_places/${id}`)
  return response.data
}

export async function updateCollectPlace(
  payload: UpdatePayload<UpdateCollectPlaceDTO>
): Promise<SuccessResponse<CollectPlace>> {
  payload.data = removeUnusedOptionalParams(payload.data)
  const response = await api.put(`/collect_places/${payload.id}`, payload.data)
  return response.data
}
