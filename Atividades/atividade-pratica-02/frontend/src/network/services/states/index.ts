import { removeUnusedOptionalParams } from "@/lib/utilscomponents"
import { SuccessResponse } from "@/network/SuccessResponsecomponents"
import { UpdatePayload } from "@/network/UpdatePayloadcomponents"
import { api } from "@/network/apicomponents"
import { CreateStateDTO } from "@/types/State/CreateStateDtocomponents"
import { State } from "@/types/State/Statecomponents"
import { UpdateStateDTO } from "@/types/State/UpdateStateDtocomponents"

export async function findAllStates(): Promise<State[]> {
  const response = await api.get("/states")
  return response.data.data
}

export async function findStateById(id: number): Promise<State> {
  const response = await api.get(`/states/${id}`)
  return response.data
}

export async function findStateByName(name: string): Promise<State[]> {
  const response = await api.get(`/states/by_name/${name}`)
  return response.data.data
}

export async function createState(
  payload: CreateStateDTO
): Promise<SuccessResponse<State>> {
  const response = await api.post("/states", payload)
  return response.data
}

export async function deleteState(id: number): Promise<SuccessResponse<State>> {
  const response = await api.delete(`/states/${id}`)
  return response.data
}

export async function updateState(
  payload: UpdatePayload<UpdateStateDTO>
): Promise<SuccessResponse<State>> {
  payload.data = removeUnusedOptionalParams(payload.data)
  const response = await api.put(`/states/${payload.id}`, payload.data)
  return response.data
}
