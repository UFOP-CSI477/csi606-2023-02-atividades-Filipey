import { Injectable } from '@nestjs/common';
import { CreateTagDto } from 'src/modules/tags/dtos/create-tag.dto';
import { TagsRepository } from 'src/modules/tags/repositories/tags.repository';

@Injectable()
export class TagsService {
  constructor(private readonly tagsRepository: TagsRepository) {}

  async create(tag: CreateTagDto) {
    return this.tagsRepository.create(tag);
  }

  async findOne(id: number) {
    return this.tagsRepository.findOne(id);
  }

  async findAll() {
    return this.tagsRepository.findAll();
  }

  async update(id: number, tag: CreateTagDto) {
    return this.tagsRepository.update(id, tag);
  }

  async remove(id: number) {
    return this.tagsRepository.remove(id);
  }
}
