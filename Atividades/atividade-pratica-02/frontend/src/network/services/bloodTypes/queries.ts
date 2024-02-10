import { findAllBloodTypes } from "@/network/services/bloodTypescomponents"
import { useQuery } from "@tanstack/react-query"

export function useFindAllBloodTypes() {
  return useQuery({
    queryKey: ["findAllBloodTypes"],
    queryFn: findAllBloodTypes
  })
}
