import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { CreateCommentDto } from 'src/modules/comments/dtos/create-comment.dto';
import { UpdateCommentDto } from 'src/modules/comments/dtos/update-comment.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CommentsRepository {
  constructor(private readonly provider: PrismaService) {}

  async create(comment: CreateCommentDto) {
    return this.provider.comment.create({
      data: comment,
    });
  }

  async findAllFromUser(userId: number) {
    return this.provider.comment.findMany({
      where: {
        user_id: userId,
      },
    });
  }

  async findAllFromPost(postId: number) {
    return this.provider.comment.findMany({
      where: {
        post_id: postId,
      },
    });
  }

  async findOne(id: number) {
    const comment = this.provider.comment.findUnique({
      where: {
        id: id,
      },
    });

    if (!comment) throw new NotFoundError('Comentario nao encontrado!');

    return comment;
  }

  async update(commentId: number, updatedComment: UpdateCommentDto) {
    const comment = this.provider.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!comment) throw new NotFoundError('Comentario nao encontrado!');

    return this.provider.comment.update({
      where: {
        id: commentId,
      },
      data: {
        body: updatedComment.body,
      },
    });
  }

  async remove(commentId: number) {
    const comment = this.provider.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!comment) throw new NotFoundError('Comentario nao encontrado!');

    return this.provider.comment.update({
      where: {
        id: commentId,
      },
      data: {
        body: 'Comentário apagado',
      },
    });
  }
}
