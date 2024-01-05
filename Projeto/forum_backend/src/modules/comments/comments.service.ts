import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from 'src/modules/comments/dtos/create-comment.dto';
import { UpdateCommentDto } from 'src/modules/comments/dtos/update-comment.dto';
import { CommentsRepository } from 'src/modules/comments/repositories/comments.repository';

@Injectable()
export class CommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  async create(comment: CreateCommentDto) {
    return this.commentsRepository.create(comment);
  }

  async findAllFrmUser(userId: number) {
    return this.commentsRepository.findAllFromUser(userId);
  }

  async findAllFromPost(postId: number) {
    return this.commentsRepository.findAllFromPost(postId);
  }

  async findOne(id: number) {
    return this.commentsRepository.findOne(id);
  }

  async update(commentId: number, updatedComment: UpdateCommentDto) {
    return this.commentsRepository.update(commentId, updatedComment);
  }

  async remove(commentId: number) {
    return this.commentsRepository.remove(commentId);
  }
}
