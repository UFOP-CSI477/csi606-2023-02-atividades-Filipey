import { UserRoles } from "types/User/UserRoles"

export type CreateUserDTO = {
  username: string
  role: UserRoles
  password: string
}
