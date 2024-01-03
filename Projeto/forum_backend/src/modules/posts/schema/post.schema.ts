import { Post } from '@prisma/client';

export class PostSchema implements Post {
  id: number;
  body: string;
  created_at: Date;
  down_votes: number;
  title: string;
  up_votes: number;
  user_id: number;
}
