import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentsService } from 'src/modules/comments/comments.service';
import { CreateCommentDto } from 'src/modules/comments/dtos/create-comment.dto';
import { UpdateCommentDto } from 'src/modules/comments/dtos/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body() comment: CreateCommentDto) {
    return this.commentsService.create(comment);
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Get('/all/user/:userId')
  async findAllFromUser(@Param('userId') userId: string) {
    return this.commentsService.findAllFrmUser(+userId);
  }

  @Get('/all/post/:postId')
  async findAllFromPost(@Param('postId') postId: string) {
    return this.commentsService.findAllFromPost(+postId);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updatedComment: UpdateCommentDto,
  ) {
    return this.commentsService.update(+id, updatedComment);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
