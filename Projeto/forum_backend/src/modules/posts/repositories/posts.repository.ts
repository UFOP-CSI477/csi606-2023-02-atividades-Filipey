import { Injectable } from '@nestjs/common';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { CreatePostDto } from 'src/modules/posts/dtos/create-post.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PostsRepository {
  constructor(private readonly provider: PrismaService) {}

  async create(post: CreatePostDto) {
    return this.provider.post.create({
      data: post,
    });
  }

  async findAll() {
    return this.provider.post.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const post = this.provider.post.findUnique({
      where: {
        id: id,
      },
    });

    if (!post) throw new NotFoundError('Post nao encontrado!');

    return post;
  }

  async findPostDetailed(id: number) {
    const post = this.provider.post.findUnique({
      where: {
        id: id,
      },
      select: {
        attachments: {
          select: {
            id: true,
            path: true,
          },
        },
        body: true,
        comments: {
          select: {
            body: true,
            created_at: true,
            id: true,
          },
        },
        created_at: true,
        reactions: true,
        up_votes: true,
        down_votes: true,
        title: true,
        user: true,
        tags: true,
        favorites: {
          select: {
            user: {
              select: {
                _count: true,
              },
            },
          },
        },
      },
    });

    if (!post) throw new NotFoundError('Post nao encontrado!');

    return post;
  }

  async getTimeline() {
    return this.provider.post.findMany({
      orderBy: [{ created_at: 'desc' }, { up_votes: 'asc' }],
    });
  }

  async getLastByTime(interval: 7 | 30 | 365) {
    const currentDate = new Date();
    const startDate = new Date(currentDate);

    startDate.setDate(currentDate.getDate() - interval);

    return this.provider.post.findMany({
      where: {
        created_at: {
          gte: startDate,
          lte: currentDate,
        },
      },
      orderBy: {
        up_votes: 'desc',
      },
    });
  }

  async findWithTags(tags_ids: Array<number>) {
    return this.provider.post.findMany({
      where: {
        tags: {
          some: {
            tag_id: {
              in: tags_ids,
            },
          },
        },
      },
      orderBy: [{ created_at: 'desc' }, { up_votes: 'asc' }],
    });
  }

  async assignTags(post_id: number, tags_ids: Array<number>) {
    const post = await this.provider.post.findUnique({
      where: {
        id: post_id,
      },
    });

    if (!post) throw new NotFoundError('Post nao encontrado!');

    return this.provider.post.update({
      where: {
        id: post_id,
      },
      data: {
        tags: {
          connect: tags_ids.map((tag) => ({ id: tag })),
        },
      },
    });
  }

  async remove(id: number, user_id: number) {
    const post = await this.provider.post.findUnique({
      where: {
        id: id,
        user_id: user_id,
      },
    });

    if (!post) throw new NotFoundError('Post nao encontrado!');

    return this.provider.post.delete({
      where: {
        id: id,
      },
    });
  }
}
