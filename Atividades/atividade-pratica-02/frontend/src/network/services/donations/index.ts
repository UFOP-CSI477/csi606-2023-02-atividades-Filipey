import { removeUnusedOptionalParams } from "@/lib/utilscomponents"
import { SuccessResponse } from "@/network/SuccessResponsecomponents"
import { UpdatePayload } from "@/network/UpdatePayloadcomponents"
import { api } from "@/network/apicomponents"
import { CreateDonationDTO } from "@/types/Donation/CreateDonationDtocomponents"
import { Donation } from "@/types/Donation/Donationcomponents"
import { UpdateDonationDTO } from "@/types/Donation/UpdateDonationDtocomponents"

export async function findAllDonations(): Promise<Donation[]> {
  const response = await api.get("/donations")
  return response.data.data
}

export async function findDonationById(id: number): Promise<Donation> {
  const response = await api.get(`/donations/${id}`)
  return response.data
}

export async function createDonation(
  payload: CreateDonationDTO
): Promise<SuccessResponse<Donation>> {
  const response = await api.post("/donations", payload)
  return response.data
}

export async function deleteDonation(
  id: number
): Promise<SuccessResponse<Donation>> {
  const response = await api.delete(`/donations/${id}`)
  return response.data
}

export async function updateDonation(
  payload: UpdatePayload<UpdateDonationDTO>
): Promise<SuccessResponse<Donation>> {
  payload.data = removeUnusedOptionalParams(payload.data)
  const response = await api.put(`/donations/${payload.id}`, payload.data)
  return response.data
}
