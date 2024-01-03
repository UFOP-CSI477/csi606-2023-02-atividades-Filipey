import { Module } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { UserRepository } from 'src/modules/users/repositories/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, PrismaService, UserRepository],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
