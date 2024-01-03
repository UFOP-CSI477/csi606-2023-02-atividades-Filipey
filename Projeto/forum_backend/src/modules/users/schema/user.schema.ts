import { $Enums, User } from '@prisma/client';

export class UserSchema implements User {
  id: number;
  username: string;
  role: $Enums.UserRoles;
  created_at: Date;
  updated_at: Date;
  picture_path: string;
  hashed_password: string;
}
