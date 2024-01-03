import { Reflector } from '@nestjs/core';
import { UserRoles } from '@prisma/client';

export const Roles = Reflector.createDecorator<UserRoles[]>();
