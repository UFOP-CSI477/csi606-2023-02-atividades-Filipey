import { api } from "network/api"

export async function findImageByPath(path: string | undefined) {
  if (!path) {
    return
  }

  const response = await api.get<Blob>("/assets/image", {
    responseType: "blob",
    params: {
      path: path
    }
  })

  return URL.createObjectURL(response.data)
}
