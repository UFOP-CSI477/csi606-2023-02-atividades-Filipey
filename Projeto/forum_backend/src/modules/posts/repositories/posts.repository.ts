import { Injectable } from '@nestjs/common';
import { PostReactions } from '@prisma/client';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { UnauthorizedError } from 'src/common/errors/types/UnauthorizedError';
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

  async findUserAllFavorites(userId: number) {
    return this.provider.post.findMany({
      orderBy: [{ created_at: 'desc' }, { favorites: { _count: 'asc' } }],
      where: {
        favorites: {
          some: {
            user_id: {
              equals: userId,
            },
          },
        },
      },
      select: {
        _count: {
          select: {
            comments: true,
            favorites: true,
          },
        },
        body: true,
        title: true,
        id: true,
        created_at: true,
        tags: {
          select: {
            tag: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
        reactions: true,
        user_id: true,
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
        id: true,
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
            user: {
              select: {
                picture_path: true,
                id: true,
                username: true,
              },
            },
          },
        },
        created_at: true,
        reactions: true,
        title: true,
        user: {
          select: {
            id: true,
            username: true,
            picture_path: true,
          },
        },
        tags: {
          select: {
            tag: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
        favorites: true,
      },
    });

    if (!post) throw new NotFoundError('Post nao encontrado!');

    return post;
  }

  async getTimeline() {
    return this.provider.post.findMany({
      orderBy: [{ created_at: 'desc' }, { favorites: { _count: 'asc' } }],
      select: {
        _count: {
          select: {
            comments: true,
            favorites: true,
          },
        },
        body: true,
        title: true,
        id: true,
        created_at: true,
        tags: {
          select: {
            tag: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
        reactions: true,
        user_id: true,
      },
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
        favorites: { _count: 'asc' },
      },
    });
  }

  async findWithTags(tagsIds: Array<number>) {
    return this.provider.post.findMany({
      where: {
        tags: {
          some: {
            tag_id: {
              in: tagsIds,
            },
          },
        },
      },
      orderBy: [{ created_at: 'desc' }, { favorites: { _count: 'asc' } }],
    });
  }

  async assignTags(postId: number, tagsIds: Array<number>) {
    const post = await this.provider.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) throw new NotFoundError('Post nao encontrado!');

    return this.provider.postTag.createMany({
      data: tagsIds.map((tag) => ({ post_id: postId, tag_id: tag })),
    });
  }

  async remove(id: number, userId: number) {
    const post = await this.provider.post.findUnique({
      where: {
        id: id,
        user_id: userId,
      },
    });

    if (!post) throw new NotFoundError('Post nao encontrado!');

    return this.provider.post.delete({
      where: {
        id: id,
      },
    });
  }

  async likePost(postId: number, userId: number) {
    const post = await this.provider.post.findUnique({
      where: {
        id: postId,
      },
      select: {
        favorites: true,
      },
    });

    if (!post || post.favorites.some((post) => post.user_id === userId)) {
      throw new UnauthorizedError('O post nao existe ou voce ja reagiu.');
    }

    return this.provider.post.update({
      where: {
        id: postId,
      },
      data: {
        favorites: {
          create: {
            user_id: userId,
          },
        },
      },
    });
  }

  async unlikePost(postId: number, userId: number) {
    const post = await this.provider.post.findUnique({
      where: {
        id: postId,
      },
      select: {
        favorites: true,
      },
    });

    if (!post || !post.favorites.some((post) => post.user_id === userId)) {
      throw new UnauthorizedError('Você não favoritou este post.');
    }

    return this.provider.post.update({
      where: {
        id: postId,
      },
      data: {
        favorites: {
          deleteMany: {
            user_id: userId,
          },
        },
      },
    });
  }

  async reactToPost(postId: number, userId: number, reaction: PostReactions) {
    const post = await this.provider.post.findUnique({
      where: {
        id: postId,
      },
      select: {
        reactions: true,
      },
    });

    if (!post || post.reactions.some((post) => post.user_id === userId)) {
      throw new UnauthorizedError('O post nao existe ou voce ja reagiu.');
    }

    return this.provider.post.update({
      where: {
        id: postId,
      },
      data: {
        reactions: {
          create: {
            user_id: userId,
            value: reaction,
          },
        },
      },
    });
  }
}
