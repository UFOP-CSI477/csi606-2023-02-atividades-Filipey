import { Injectable, UnauthorizedException } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateTagDto } from 'src/modules/tags/dtos/create-tag.dto';

@Injectable()
export class TagsRepository {
  constructor(private readonly provider: PrismaService) {}

  private async findByIdOrThrow(id: number) {
    const tag = await this.provider.tag.findUnique({
      where: {
        id: id,
      },
    });

    if (!tag) throw new NotFoundError('Tag nao encontrada!');

    return tag;
  }

  async create(tag: CreateTagDto) {
    const tagWithName = await this.provider.tag.findUnique({
      where: {
        name: tag.name,
      },
    });

    if (tagWithName) {
      throw new UnauthorizedException(
        `A tag com o nome ${tag.name} ja existe!`,
      );
    }

    return this.provider.tag.create({
      data: tag,
    });
  }

  async findOne(id: number) {
    return this.findByIdOrThrow(id);
  }

  async findAll() {
    return this.provider.tag.findMany();
  }

  async update(id: number, tag: CreateTagDto) {
    await this.findByIdOrThrow(id);

    return this.provider.tag.update({
      where: {
        id: id,
      },
      data: tag,
    });
  }

  async remove(id: number) {
    await this.findByIdOrThrow(id);

    return this.provider.tag.delete({
      where: {
        id: id,
      },
    });
  }
}
