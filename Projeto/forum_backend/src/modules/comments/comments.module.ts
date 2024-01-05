import { Module } from '@nestjs/common';
import { CommentsController } from 'src/modules/comments/comments.controller';
import { CommentsRepository } from 'src/modules/comments/repositories/comments.repository';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CommentsService } from './comments.service';

@Module({
  providers: [CommentsService, CommentsRepository, PrismaService],
  controllers: [CommentsController],
})
export class CommentsModule {}
