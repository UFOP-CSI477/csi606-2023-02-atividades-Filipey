import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { UserRepository } from 'src/users/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: CreateUserDto) {
    return this.create(user);
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

  async remove(id: number) {
    return this.userRepository.remove(id);
  }
}
