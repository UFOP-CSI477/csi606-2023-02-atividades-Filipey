import { Injectable } from '@nestjs/common';
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

  async findWithTags(tags_ids: Array<number>) {
    return this.postsRepository.findWithTags(tags_ids);
  }

  async assignTags(post_id: number, tags_ids: Array<number>) {
    return this.postsRepository.assignTags(post_id, tags_ids);
  }

  async remove(id: number, user_id: number) {
    return this.postsRepository.remove(id, user_id);
  }
}
