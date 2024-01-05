import { Injectable } from '@nestjs/common';
import { PostReactions } from '@prisma/client';
import { CreatePostDto } from 'src/modules/posts/dtos/create-post.dto';
import { PostsRepository } from 'src/modules/posts/repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async create(post: CreatePostDto) {
    return this.postsRepository.create(post);
  }

  async findAll() {
    return this.postsRepository.findAll();
  }

  async findOne(id: number) {
    return this.postsRepository.findOne(id);
  }

  async findPostDetailed(id: number) {
    return this.postsRepository.findPostDetailed(id);
  }

  async getTimeline() {
    return this.postsRepository.getTimeline();
  }

  async findWithTags(tagsIds: Array<number>) {
    return this.postsRepository.findWithTags(tagsIds);
  }

  async assignTags(postId: number, tagsIds: Array<number>) {
    return this.postsRepository.assignTags(postId, tagsIds);
  }

  async remove(id: number, userId: number) {
    return this.postsRepository.remove(id, userId);
  }

  async likePost(postId: number, userId: number) {
    return this.postsRepository.likePost(postId, userId);
  }

  async unlikePost(postId: number, userId: number) {
    return this.postsRepository.unlikePost(postId, userId);
  }

  async reactToPost(postId: number, userId: number, reaction: PostReactions) {
    return this.postsRepository.reactToPost(postId, userId, reaction);
  }
}
