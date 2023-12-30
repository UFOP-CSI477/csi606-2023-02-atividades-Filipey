import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from 'src/users/repositories/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, PrismaService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}
