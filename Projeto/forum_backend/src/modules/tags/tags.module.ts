import { Module } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { TagsRepository } from 'src/modules/tags/repositories/tags.repository';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';

@Module({
  providers: [TagsService, PrismaService, TagsRepository],
  controllers: [TagsController],
})
export class TagsModule {}
