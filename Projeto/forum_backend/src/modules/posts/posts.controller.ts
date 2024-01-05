import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PostReactions } from '@prisma/client';
import { CreatePostDto } from 'src/modules/posts/dtos/create-post.dto';
import { PostsService } from 'src/modules/posts/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() post: CreatePostDto) {
    return this.postsService.create(post);
  }

  @Get()
  async findAll() {
    return this.postsService.findAll();
  }

  @Get('/by_id/:id')
  async findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Get('/detailed/:id')
  async findPostDetailed(@Param('id') id: string) {
    return this.postsService.findPostDetailed(+id);
  }

  @Get('/timeline')
  async getTimeline() {
    return this.postsService.getTimeline();
  }

  @Get('/tags')
  async findWithTags(@Query('ids') ids: Array<number>) {
    return this.postsService.findWithTags(ids);
  }

  @Put('/tags/:postId')
  async assignTags(
    @Param('postId') postId: string,
    @Query('ids') ids: Array<number>,
  ) {
    return this.postsService.assignTags(+postId, ids);
  }

  @Post('/like/:postId')
  async likePost(
    @Param('postId') postId: string,
    @Query('userId') userId: string,
  ) {
    return this.postsService.likePost(+postId, +userId);
  }

  @Post('/unlike/:postId')
  async unlikePost(
    @Param('postId') postId: string,
    @Query('userId') userId: string,
  ) {
    return this.postsService.unlikePost(+postId, +userId);
  }

  @Post('/react/:postId')
  async reactToPost(
    @Param('postId') postId: string,
    @Query('userId') userId: string,
    @Body('reaction') reaction: PostReactions,
  ) {
    return this.postsService.reactToPost(+postId, +userId, reaction);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string, @Query('user_id') user_id: string) {
    return this.postsService.remove(+id, +user_id);
  }
}
