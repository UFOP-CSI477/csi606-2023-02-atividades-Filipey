import {
  findAllDonations,
  findDonationById
} from "@/network/services/donationscomponents"
import { useQuery } from "@tanstack/react-query"

export function useFindAllDonations() {
  return useQuery({
    queryKey: ["findAllDonations"],
    queryFn: findAllDonations
  })
}

export function useFindDonationById(id: number) {
  return useQuery({
    queryKey: ["findDonationById", id],
    queryFn: () => findDonationById(id)
  })
}
