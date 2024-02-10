import { SuccessResponse } from "@/network/SuccessResponsecomponents"
import { UpdatePayload } from "@/network/UpdatePayloadcomponents"
import { api } from "@/network/apicomponents"
import { BloodType } from "@/types/BloodType/BloodTypecomponents"
import { CreateBloodTypeDTO } from "@/types/BloodType/CreateBloodTypeDtocomponents"
import { UpdateBloodTypeDTO } from "@/types/BloodType/UpdateBloodTypeDtocomponents"

export async function findAllBloodTypes(): Promise<BloodType[]> {
  const response = await api.get("/blood_types")
  return response.data.data
}

export async function findBloodTypeById(id: number): Promise<BloodType> {
  const response = await api.get(`/blood_types/${id}`)
  return response.data
}

export async function createBloodType(
  payload: CreateBloodTypeDTO
): Promise<SuccessResponse<BloodType>> {
  const response = await api.post("/blood_types", payload)
  return response.data
}

export async function deleteBloodType(
  id: number
): Promise<SuccessResponse<BloodType>> {
  const response = await api.delete(`/blood_types/${id}`)
  return response.data
}

export async function updateBloodType(
  payload: UpdatePayload<UpdateBloodTypeDTO>
): Promise<SuccessResponse<BloodType>> {
  const response = await api.put(`/blood_types/${payload.id}`, payload.data)
  return response.data
}
