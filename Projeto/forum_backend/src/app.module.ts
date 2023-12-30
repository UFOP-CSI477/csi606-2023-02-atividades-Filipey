import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { PrismaService } from './prisma/prisma.service';
import { ReactionsModule } from './reactions/reactions.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    CommentsModule,
    TagsModule,
    ReactionsModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
