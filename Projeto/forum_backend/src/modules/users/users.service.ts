import { Injectable } from '@nestjs/common';
import { UserRoles } from '@prisma/client';
import { CreateUserDto } from 'src/modules/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/modules/users/dtos/update-user.dto';
import { UserRepository } from 'src/modules/users/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: CreateUserDto) {
    return this.userRepository.create(user);
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async findByUsername(username: string) {
    return this.userRepository.findByUsername(username);
  }

  async updateProfilePicture(id: number, filepath: string) {
    return this.userRepository.updateProfilePicture(id, filepath);
  }

  async update(id: number, user: UpdateUserDto) {
    return this.userRepository.update(id, user);
  }

  async updateRole(id: number, newRole: UserRoles) {
    return this.userRepository.updateUserRole(id, newRole);
  }

  async remove(id: number) {
    return this.userRepository.remove(id);
  }
}
