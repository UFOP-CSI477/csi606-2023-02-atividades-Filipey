import { Module } from '@nestjs/common';
import { CommentsModule } from './modules/comments/comments.module';
import { PostsModule } from './modules/posts/posts.module';
import { PrismaService } from './modules/prisma/prisma.service';
import { ReactionsModule } from './modules/reactions/reactions.module';
import { TagsModule } from './modules/tags/tags.module';
import { UsersModule } from './modules/users/users.module';

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
