import { Module } from '@nestjs/common';
import { PostsController } from 'src/modules/posts/posts.controller';
import { PostsRepository } from 'src/modules/posts/repositories/posts.repository';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsService, PrismaService, PostsRepository],
  controllers: [PostsController],
})
export class PostsModule {}
