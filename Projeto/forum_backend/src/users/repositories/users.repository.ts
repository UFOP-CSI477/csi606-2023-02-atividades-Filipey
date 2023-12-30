import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { UserSchema } from 'src/users/schema/user.schema';

@Injectable()
export class UserRepository {
  constructor(private readonly provider: PrismaService) {}

  async create(user: CreateUserDto): Promise<UserSchema> {
    const hashed_password = await bcrypt.hash(user.password, 10);

    return this.provider.user.create({
      data: { ...user, hashed_password: hashed_password },
    });
  }

  async findAll(): Promise<UserSchema[]> {
    return this.provider.user.findMany();
  }

  async findOne(id: number): Promise<UserSchema> {
    const user = await this.provider.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new NotFoundError('Usuario nao encontrado.');
    }

    return user;
  }

  async findByUsername(username: string): Promise<UserSchema> {
    const user = await this.provider.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new NotFoundError('Usuario nao encontrado');
    }

    return user;
  }

  async updateProfilePicture(
    id: number,
    filepath: string,
  ): Promise<UserSchema> {
    return this.provider.user.update({
      where: {
        id: id,
      },
      data: {
        picture_path: filepath,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserSchema> {
    return this.provider.user.update({
      where: {
        id: id,
      },
      data: {
        username: updateUserDto.username,
      },
    });
  }

  async remove(id: number): Promise<UserSchema> {
    return this.provider.user.delete({
      where: {
        id: id,
      },
    });
  }
}
