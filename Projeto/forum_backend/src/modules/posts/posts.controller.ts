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

  @Put('/tags/:post_id')
  async assignTags(
    @Param('post_id') post_id: string,
    @Query('ids') ids: Array<number>,
  ) {
    return this.postsService.assignTags(+post_id, ids);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string, @Query('user_id') user_id: string) {
    return this.postsService.remove(+id, +user_id);
  }
}
