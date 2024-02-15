import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SkipAuth } from 'src/decorators/routes-security.decorator';
import { CreateUserDto } from 'src/modules/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/modules/users/dtos/update-user.dto';
import { UsersService } from 'src/modules/users/users.service';

import { UserRoles } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @SkipAuth()
  async create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Get()
  @Roles(['ADMIN', 'SUPER_ADMIN', 'NORMAL'])
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @SkipAuth()
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('/username/:username')
  @SkipAuth()
  async findByUsername(@Param('username') username: string) {
    return this.usersService.findByUsername(username);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.update(+id, user);
  }

  @Patch('/roles/:id')
  @Roles(['ADMIN', 'SUPER_ADMIN'])
  async updateUserRole(@Param('id') id: string, @Body() role: UserRoles) {
    return this.usersService.updateRole(+id, role);
  }

  @Patch('/picture/:id')
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './uploads',
    }),
  )
  async updateProfilePicture(
    @Param('id') id: string,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const fileExtension = image.originalname.split('.').pop();
    const newFileName = `${image.filename}.${fileExtension}`;

    const newPath = path.join('./uploads', newFileName);

    await fs.promises.rename(image.path, newPath);

    return this.usersService.updateProfilePicture(+id, newPath);
  }

  @Delete(':id')
  @Roles(['ADMIN', 'SUPER_ADMIN'])
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
