import { UserRoles } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEnum(UserRoles)
  role: UserRoles;

  @IsString()
  password: string;
}
