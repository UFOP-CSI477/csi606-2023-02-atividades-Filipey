import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTagDto } from 'src/modules/tags/dtos/create-tag.dto';
import { TagsService } from 'src/modules/tags/tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  async create(@Body() tag: CreateTagDto) {
    return this.tagsService.create(tag);
  }

  @Get()
  async findAll() {
    return this.tagsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.tagsService.findOne(+id);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() tag: CreateTagDto) {
    return this.tagsService.update(+id, tag);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this.tagsService.remove(+id);
  }
}
